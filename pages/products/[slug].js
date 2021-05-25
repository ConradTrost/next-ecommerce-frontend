import Head from 'next/head';

import { fromImageToUrl, API_URL } from '../../utils/urls';
import { twoDecimals } from '../../utils/format';
import BuyButton from '../../components/BuyButton';

const Product = ({ product }) => {
    return(
        <div>
            <Head>
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                }
                {product.meta_description &&
                    <meta name="description" content={product.meta_description} />
                }
            </Head>
            <h3>{product.name}</h3>
            <img src={fromImageToUrl(product.image)} />
            <p>${twoDecimals(product.price)}</p>
            <BuyButton  product={product} />
            <p>{product.content}</p>
        </div>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
    const found = await product_res.json();

    return {
        props: {
            product: found[0] // API resonse is an array
        }
    }
}

export async function getStaticPaths() {
    // Retrieve all possible paths
    const product_res = await fetch(`${API_URL}/products/`);
    const products = await product_res.json();
    
    // Return to next.js context
    return {
        paths: products.map(product => ({
            params: { slug: String(product.slug) }
        })),
        fallback: false // Shows 404 if params don't match
    }
}

export default Product;