import { getCurrencyValues } from "services/get-currency-values"
import { CONSTANTS } from "utils/constants"

export async function searchProductTransform(productsFound){
    return {
        author:CONSTANTS.AUTHOR,
        categories: productsFound.filters[0]?.values[0]?.path_from_root,
        items: await productTransform(productsFound.results),
    }
}

async function productTransform(products){
    const mappedArray = await Promise.all(
        products.map(async(product)=>{
            const {decimal_places:decimals,symbol} = await getCurrencyValues(product.prices.prices[0].currency_id)
        return{ 
            id: product.id,
            title: product.title,
            price: {
                currency: product.prices.prices[0].currency_id,
                amount: product.prices.prices[0].amount,
                decimals,
                symbol
            },
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            address: product.address.state_name 
        }
    }))
    return mappedArray
}