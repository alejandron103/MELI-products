import Image from 'next/image';
import Finder from './Finder';
import styles from 'styles/Home.module.scss'


export default function Header(){
  return <>
    <header className={styles.Header}>
      <Image 
          src='/logo.png' 
          alt='logo'
          width={50}
          height={30}
      />
      <Finder/>
    </header>
  </>
}