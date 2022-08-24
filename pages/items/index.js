import BreadCrumb from "components/Breadcrumb"
import { Layout } from "components/Layout"
import ProductSearch from "components/ProductSearch"
import Head from "next/head"
import { searhProducts } from "services/search-products"

export default function search({query, results, categories}){
    return <>
    <Head>
      <title>Search results to {query}</title>
      <meta name="description" content={`search Results to ${query}`} />
    </Head>
    <Layout>
      { categories && <div>
        <BreadCrumb categories={categories}/>
      </div>
      }
      <div className={categories ? 'container' : 'container without-categories' }>
        { results.length > 0 ?
          results.map(result => {
            const {id, price, picture, title, free_shipping, address} = result;
            return (
             <ProductSearch
              key={id}
              id={id}
              price={price}
              picture={picture}
              title={title}
              free_shipping={free_shipping}
              address={address}
             />
            )
          }) : <h1>No se encontraron Resultados</h1>
        }
      </div>
    </Layout>
  </>
}

export async function getServerSideProps (context) {
    const { query } = context
    const { q = '' } = query
    
    const {items:results, categories=''} = await searhProducts(q)
    return {
      props: {
        query: q,
        results,
        categories
      }
    }
  
  }