//semisal menerapkan union didaam alias tentu bisa
export type ID = number | string ;

export type Category ={
    id : ID; //gantidengan union type
    name: string;
}

export type Product ={
    id : number;
    name : string;
    harga : number;
    category : Category;
}