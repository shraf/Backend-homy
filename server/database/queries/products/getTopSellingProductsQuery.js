import queryBuilder from "../../config/queryBuilder.js"

const getTopSellingProductsQuery = async (pagination = { page: 1 }) => {
    const { page } = pagination
    const rows = await queryBuilder.select('products.*')
        .sum({selling_count:'quantity'})
        .from('products')
        .leftJoin('cart_product', 'cart_product.product_id', '=', 'products.id')
        .orderBy('selling_count', 'desc', 'last')
        .groupBy('products.id')
        .paginate({
            perPage: 12,
            currentPage: page
        })
    return rows

}

export default getTopSellingProductsQuery