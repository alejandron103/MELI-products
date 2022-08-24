import Image from 'next/image';
import Finder from './Finder';
import styles from 'styles/Home.module.scss'
import Link from 'next/link';


export default function Header(){
  return <>
    <header className={styles.Header}>
      <Link href="/">
        <Image 
            className='c-pointer'
            src='/logo.png' 
            alt='logo'
            width={50}
            height={30}
        />
      </Link>
      <Finder/>
    </header>
  </>
}