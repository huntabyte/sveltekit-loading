/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {

    const fetchProducts = async () => {
        const productRes = await fetch('https://dummyjson.com/products?limit=10')
        const productData = await productRes.json()
        return productData.products
    }

    return {
        products: await fetchProducts(),
    }
}