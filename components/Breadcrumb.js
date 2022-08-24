import styles from 'styles/Home.module.scss'

export default function BreadCrumb({categories}){
    return<>
        <div className={styles.Breadcrumb}>
        {
            categories.map( category => {
                return <span key={category.id}>{category.name}</span>
            })
        }
        </div>
    </>
}