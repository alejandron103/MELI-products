import { CONSTANTS } from "utils/constants"

export async function getCurrencyValues(currencyCode){
    if(currencyCode){
        const request = await fetch(`${CONSTANTS.BASE_API}currencies/${currencyCode}`)
        const productDescription = await request.json()
        if(request.ok){
            const { symbol, decimal_places } = productDescription
            return { symbol, decimal_places } 
        }
        console.warn('currency values not found')
        return null
    }
    console.error('currency code empty')
    throw new Error('currency values not found')
}