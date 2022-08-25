import { productDetailTransform } from "transforms/product-detail-transform";
import { CONSTANTS } from "utils/constants"
import { getCurrencyValues } from "./get-currency-values";

export async function getProductDetails(idProduct){
    if(idProduct){
        const request = await fetch(`${CONSTANTS.BASE_API}items/${idProduct}`)
        const productDetail = await request.json()
        if(request.ok && Object.keys(productDetail).length > 0){
            const description = await getProductDescription(idProduct);
            const {decimal_places:decimals, symbol} = await getCurrencyValues(productDetail.currency_id);
            const categories = await getProductCategories(productDetail.category_id);
            const productTransform = productDetailTransform(productDetail, description, decimals, symbol,categories)
            return productTransform
        }
        console.warn('Product not found')
        return null
    }
    console.error('product id empty')
    throw new Error('Product not found')
}


async function getProductDescription(idProduct){
    if(idProduct){
        const request = await fetch(`${CONSTANTS.BASE_API}items/${idProduct}/description`)
        const productDescription = await request.json()
        if(request.ok){
            const { plain_text:PlainText } = productDescription
            return  PlainText 
        }
        console.warn('Descripción not avaible')
        return null;
    }
    console.error('product id empty')
    throw new Error('Descripción not avaible')
}

export async function getProductCategories(idCategory){
    if(idCategory){
        const request = await fetch(`${CONSTANTS.BASE_API}categories/${idCategory}`)
        const productCategories = await request.json()
        if(request.ok){
            const { path_from_root:categories } = productCategories
            return  categories 
        }
        console.warn('Categories not found')
        return null;
    }
    console.error('Category id empty')
    throw new Error('Categories not found')
}