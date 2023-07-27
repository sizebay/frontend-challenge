import { IError } from "interfaces/IError";
import { IItem } from "interfaces/IItem";

const url = 'https://static.sizebay.technology/assets/';

interface IItemsReponse {
    data: IItem[];
    error: false | IError
}

export async function fetchProducts(): Promise<IItemsReponse> {
    const endpoint = 'storeCollections.json';

    let itemsReponse: IItemsReponse = {
        data: [],
        error: false
    };

    try {
        const response = await fetch(url + endpoint);

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const jsonData: IItem[] = await response.json();

        itemsReponse = {
            ...itemsReponse,
            data: jsonData,
        };

        return itemsReponse;

    } catch (error) {

        itemsReponse = {
            ...itemsReponse,
            error: { message: error, code: 1 }
        };

        return itemsReponse;
    }
};
