import Head from 'next/head'

import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { fromImageToUrl, API_URL } from '../utils/urls';
import { twoDecimals } from '../utils/format';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>This is a pretend store</title>
      </Head>
      <h1>Pretend Store</h1>
      {products.map(product => (
        <div key={product.name} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
          <div className={styles.product__Row}> 
            <div className={styles.product__ColIm}>
              <img src={fromImageToUrl(product.image)} />
            </div>

            <div className={styles.product__Col}>
              <p>{product.name}</p> 
              <p>${twoDecimals(product.price)}</p>
            </div>
          </div>
          </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  // Fetch the products
  const product_res = await fetch(`${API_URL}/products/`);
  const products = await product_res.json();

  // Return products as props
  return {
    props: {
      products
    }
  }
}