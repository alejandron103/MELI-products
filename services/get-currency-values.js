import { CONSTANTS } from "utils/constants"

export async function getCurrencyValues(currencyCode){
    if(currencyCode){
        const request = await fetch(`${CONSTANTS.BASE_API}currencies/${currencyCode}`)
        const response = await request.json()
        const productDescription = await response
        const { symbol, decimal_places } = productDescription
        return { symbol, decimal_places } 
    }
    return {}
}