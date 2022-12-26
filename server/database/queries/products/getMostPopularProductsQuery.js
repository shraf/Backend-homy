import queryBuilder from "../../config/queryBuilder.js"

const getMostPopularProductsQuery = async (pagination = { page: 1 }) => {
    const { page } = pagination
    const rows = await queryBuilder.select('products.*')
        .sum({selling_count:queryBuilder.raw('coalesce(quantity,0) + coalesce(users_rated_number, 0)')})
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

export default getMostPopularProductsQuery