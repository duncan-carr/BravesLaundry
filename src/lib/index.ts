export enum Building {
    Geisert, Harper, Heitz, Williams, University, NotFound
}

export type Machine = {
    type: "washer" | "dryer";
    available: boolean;
}

export type ActiveMachinesPayload = {
    location_key: string;
    washers_active: number;
    dryers_active: number;
}