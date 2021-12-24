import Head from 'next/head'
import Image from 'next/image'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {



  return (
    <>

     {/*  <div className={styles.page-container}> 

        // while using styles.syntax you cannot use "dash" in the classNames otherwise an error will occur
       */}


       <toolbar />{/** it will not render the toolbar.js */}

       <Toolbar />{/** it will render the toolbar.js */}

      <div className={styles.pageContainer}>
        <div className={styles.main}>

        <h1>Next.js News App</h1>

    <h3>Your one stop shop for the latest news articles</h3>
    <h4>Click Feed to See News</h4>

        </div>
      </div>





    </>
  )
}






