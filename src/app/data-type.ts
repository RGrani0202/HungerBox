export interface shop{
    name: string,
    stars: string,
    image: string,
    cafe:string,
    id:number
}

export interface topbrands{
    name: string,
    image: string,
    cafe:string,
    id:number
}

export interface fooditems{
    name: string,
    image: string,
    stars: string,
    description: string,
    cafe: string,
    price: string,
    id:number
    quantity: undefined | number;
}