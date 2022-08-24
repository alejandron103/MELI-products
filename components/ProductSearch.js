import Image from "next/image";
import Link from "next/link";
import { currencyFormat } from "utils/currency-format";
import styles from 'styles/SearchProduct.module.scss';

export default function ProductSearch({id, price, picture, title, free_shipping, address}){
    return <>
        <div className={styles.ProductSearch}>
            <Link href={`/items/${id}`}>
                <a>
                    <Image width='170' height='170' src={picture} alt={title} />
                    <div className={styles.ContainerContent}>
                        <div className={styles.ContainerInfo}> 
                            <div className={styles.ContainerPrice}>
                                <h3 className={styles.ProductPrice}>{currencyFormat(price.amount, price.decimals, price.symbol)}</h3>
                                { free_shipping && <span className={styles.FreeShipping}></span>}
                            </div>
                            <h2 className={styles.ProductTitle}>{title}</h2>
                        </div>
                        <p className={styles.ProdctAddress}>{address}</p>
                    </div>
                </a>
            </Link>
        </div>
    </>
}