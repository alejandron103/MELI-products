import { CONSTANTS } from "utils/constants";

export function productDetailTransform(product, description, decimals, symbol, categories){
    return {
        author: CONSTANTS.AUTHOR,
        item:{
            id: product.id,
            title: product.title,
            price: {
                currency: product.currency_id,
                amount: product.price,
                decimals,
                symbol
            },
            picture: product.pictures[0].url,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            sold_quantity: product.sold_quantity,
            description,
            categories
        }
    }
}