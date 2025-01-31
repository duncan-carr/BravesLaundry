const locations: { [key: string]: string }[] = [
	{ '2320032-013': 'Floor 2' },
	{ '2320032-019': 'Floor 4' },
	{ '2320032-020': 'Floor 6' },
	{ '2320032-021': 'Floor 8' },
	{ '2320032-022': 'Floor 10' }
];

const url = 'https://mycscgo.com/api/v1/location/c0a88120-c994-4581-8f6f-51f35533cf5c/room';

async function loadMachines(fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>) {
	let responses = [];

	for (const location of locations) {
		for (const key in location) {
			const response = await fetch(`${url}/${key}/machines`);
			responses.push({ location: location[key], machines: await response.json() });
		}
	}

	return { responses };
}

export async function load({ fetch }) {
	return { lazy: { machineData: loadMachines(fetch) } };
}

