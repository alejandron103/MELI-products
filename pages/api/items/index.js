import {searhProducts} from 'services/search-products.js'

export default async function handler(req, res) {
  const { query: { q } } = req

  const results = await searhProducts(q)
  return res.status(200).json(results)
}