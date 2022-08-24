import { productDetailTransform } from "transforms/product-detail-transform";
import { CONSTANTS } from "utils/constants"
import { getCurrencyValues } from "./get-currency-values";

export async function getProductDetails(idProduct){
    if(idProduct){
        const request = await fetch(`${CONSTANTS.BASE_API}items/${idProduct}`)
        const response = await request.json()
        const productDetail = await response
        if(Object.keys(productDetail).length > 0){
            const description = await getProductDescription(idProduct);
            const {decimal_places:decimals, symbol} = await getCurrencyValues(productDetail.currency_id);
            const categories = await getProductCategories(productDetail.category_id);
            const productTransform = productDetailTransform(productDetail, description, decimals, symbol,categories)
            return productTransform
        }
    }
    return {}
}


async function getProductDescription(idProduct){
    if(idProduct){
        const request = await fetch(`${CONSTANTS.BASE_API}items/${idProduct}/description`)
        const response = await request.json()
        const productDescription = await response
        const { plain_text:PlainText } = productDescription
        return  PlainText 
    }
    return 'Descripción no disponible'
}

export async function getProductCategories(idCategory){
    if(idCategory){
        const request = await fetch(`${CONSTANTS.BASE_API}categories/${idCategory}`)
        const response = await request.json()
        const productCategories = await response
        const { path_from_root:categories } = productCategories
        return  categories 
    }
    return[]
}