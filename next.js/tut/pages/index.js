import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (  
    <>
      <Head>
        <title>Reza Aghajani | Home</title>
      </Head>
    
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima deleniti voluptas, ex consequuntur earum, tempora veniam rerum voluptatibus provident, labore aspernatur nulla qui distinctio voluptatum exercitationem quaerat. Voluptatibus, obcaecati!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum sed omnis, sequi consequatur, voluptates quae eos architecto saepe aspernatur quidem eligendi at aliquid iure facere qui dolore temporibus harum?</p>
        <Link href="/lists" >
          <a className={styles.btn}> See our lists</a>
        </Link>
      </div>

    </>

  )
}
