import { supabase } from '$lib/database/supabaseClient';
import { getCurrentDayAndTimeBucket } from '$lib/utils';

const locations: { [key: string]: string }[] = [{ '2320032-009': 'Harper Hall' }];

const url = 'https://mycscgo.com/api/v1/location/c0a88120-c994-4581-8f6f-51f35533cf5c/room';

async function loadMachines(
	fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>
) {
	let responses = [];

	const timeBucket = getCurrentDayAndTimeBucket();

	const { data: usageData, error } = await supabase
		.from('usage_aggregates')
		.select('*')
		.eq('day_of_week', timeBucket.dayOfWeek)
		.eq('time_bucket', timeBucket.timeBucket)
		.in('room_key', ['2320032-009']);

	if (error) {
		console.warn('Could not properly fetch usage data for Geisert Hall.');
		console.warn(error.message);
	}

	for (const location of locations) {
		for (const key in location) {
			const response = await fetch(`${url}/${key}/machines`);
			const usage = usageData?.find((data) => data.room_key === key);
			responses.push({
				location: location[key],
				machines: await response.json(),
				averageUsage:
					Math.round(
						((usage?.total_count ?? 0) / (usage?.sample_count ?? 1) + Number.EPSILON) * 100
					) / 100
			});
		}
	}

	return { responses };
}

export async function load({
	fetch
}: {
	fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
}) {
	return { lazy: { machineData: loadMachines(fetch) } };
}
