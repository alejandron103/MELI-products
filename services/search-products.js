import { searchProductTransform } from "transforms/search-products-transform"
import { CONSTANTS } from "utils/constants"

export async function searhProducts(keyword=''){
    if(keyword !== ''){
        const request = await fetch(`${CONSTANTS.BASE_API}sites/MLA/search?q=${keyword}&limit=${CONSTANTS.PRODUCTS_LIMIT}`)
        const productsFound = await request.json()
        if(request.ok){
            const productTransform = searchProductTransform(productsFound);
            return productTransform
        }
        console.warn('products not found')
    }
    console.error('products not found')
    return {items:[]}
}