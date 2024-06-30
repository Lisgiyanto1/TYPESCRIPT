export interface Employe{
    id: number,
    name : string,
    city_address : string
}

export interface Manager extends Employe{
    addNumberEmploye : number;
}