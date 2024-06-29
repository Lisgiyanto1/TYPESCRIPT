export enum customerType  {
    GOLD,
    PLATINUM,
    BRONZE
}

export type Customer = {
    id : number;
    name: string;
    hobbies: string[];
    type: customerType;
}