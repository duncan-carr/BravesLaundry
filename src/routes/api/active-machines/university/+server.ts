import type { ActiveMachinesPayload, Machine } from "$lib";
import { supabase } from "$lib/database/supabaseClient";

const university = [
    '2320032-002', // university
]

const url = 'https://mycscgo.com/api/v1/location/c0a88120-c994-4581-8f6f-51f35533cf5c/room';

export const GET = async ({ fetch }) => {
    for (const key of university) {
        const machines: Machine[] = await fetch(`${url}/${key}/machines`).then(res => res.json());
        let activeWashers = 0;
        let activeDryers = 0;
        for (const machine of machines) {
            if (machine.available) {
                continue;
            }
            if (machine.type === 'washer') {
                activeWashers++;
            } else {
                activeDryers++;
            }
        }

        const payload: ActiveMachinesPayload = {
            location_key: key,
            washers_active: activeWashers,
            dryers_active: activeDryers
        }

        const { error } = await supabase.from('machines').insert(payload)
        if (error) {
            console.error('Error inserting data:', error.message)
        }
    }

    return new Response("Task completed.")
}