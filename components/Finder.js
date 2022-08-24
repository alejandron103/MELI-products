import { useRouter } from "next/router";
import { useState } from "react"
import styles from 'styles/Home.module.scss'

export default function Finder(){
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault()
    router.push(`/items?q=${keyword}`)
  }
  const handleChange = (event) => {
    setKeyword(event.target.value)
  }
  return <form className={styles.Finder} onSubmit={handleSubmit} >
    <input className={styles.FinderInput} placeholder="Nunca dejes de buscar" type="text" value={keyword} onChange={handleChange}/>
    <input type='submit'className={styles.SearchButton}/>
  </form>
}