import { searchProductTransform } from "transforms/search-products-transform"
import { CONSTANTS } from "utils/constants"

export async function searhProducts(keyword=''){
    if(keyword !== ''){
        const request = await fetch(`${CONSTANTS.BASE_API}sites/MLA/search?q=${keyword}&limit=${CONSTANTS.PRODUCTS_LIMIT}`)
        const response = await request.json()
        const productsFound = await response
        const productTransform = searchProductTransform(productsFound);
        return productTransform
    }
    return {items:[]}
}