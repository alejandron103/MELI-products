import { getProductDetails } from "services/get-product-details"


export default async function handler(req, res) {
    const { query: { id } } = req

  const results = await getProductDetails(id)
  return res.status(200).json(results)
}