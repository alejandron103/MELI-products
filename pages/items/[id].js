import Head from "next/head";
import { Layout } from "components/Layout";
import { getProductDetails } from "services/get-product-details";
import Image from "next/image";
import { currencyFormat } from "utils/currency-format";
import BreadCrumb from "components/Breadcrumb";
import CustomButton from "components/CustomButton";
import styles from 'styles/ProductDetail.module.scss';
import { PRODUCT_CONDITIONS } from "utils/constants";
import { getMapKey } from "utils/get-map-key";


export default function Product({picture, title, description, priceFormated, categories, sold_quantity, productCondition}){
    return <>
      <Head>
        <title>Product Detail {title}</title>
        <meta name="description" content={`Detail product ${title}`} />
      </Head>
      <Layout>
      { categories && <div>
        <BreadCrumb categories={categories}/>
      </div>
      }
        <div className={`container ${styles.ProductDetail}`}>
          <div className={styles.ContainerDetail}>
            <Image className={styles.ProductImage} src={picture} width={800} height={677} alt={`decription ${title}`}/>
            <div className={styles.ProductInfo}>
              <div className={styles.ProductTags}>
                <span>{productCondition}</span> - <span>{sold_quantity} vendidos</span>
              </div>
              <h3 className={styles.productTitle}>{title}</h3>
              <span className={styles.productPrice}>{priceFormated}</span>
              <CustomButton text={"Comprar"}/>
            </div>
          </div>
          <div className={styles.ProductContainerDescription}>
            <h4 className={styles.DescriptionTitle}>Descripción del producto</h4>
            <p className={styles.DescriptionText}>{description}</p>
          </div>
        </div>
      </Layout>
    </>
}

export async function getServerSideProps ({ params }) {
  const {id} = params;
  const {item: productDetails} = await getProductDetails(id)
  const {price, condition} = productDetails
  const priceFormated = currencyFormat(price.amount, price.decimals, price.symbol)
  const productCondition  = getMapKey(condition, PRODUCT_CONDITIONS)
  return {
    props: {
     ...productDetails,
     priceFormated,
     productCondition
    }
  }
}