export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_4BC573F07621396A';

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IukS8Gv3aCrt6TpCEAXUDOCazbiNfMbpO8EN1FnstXjv7x0gPEgtJJpTWltU38UEsX76GSEOWACphdFfWDZglS300Ofh0ZSOa';

export const fromImageToUrl = (image) => {
    if (!image) {
        return "/vercel.svg";
    }
    if (image.url.indexOf("/" === 0)) {
        return `${API_URL}${image.url}`;
    }
    return image.url;
}