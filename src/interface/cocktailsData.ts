// export interface DataFetched {
//     drinks?: { [key: string]: null | string }[];
// }
export interface Drinks {
    drinks?: Drink[];
}

export interface Drink {
    idDrink?: string;
    strDrink?: string;
    strDrinkThumb?: string;
}
