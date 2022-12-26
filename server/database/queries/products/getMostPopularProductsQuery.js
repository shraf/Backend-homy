import queryBuilder from "../../config/queryBuilder.js"

const getMostPopularProductsQuery = async (pagination = { page: 1, per_page: 12 }) => {
    const { page, per_page } = pagination
    const rows = await queryBuilder.select('products.*')
        .sum({selling_count:queryBuilder.raw('coalesce(quantity,0) + coalesce(users_rated_number, 0)')})
        .from('products')
        .leftJoin('cart_product', 'cart_product.product_id', '=', 'products.id')
        .orderBy('selling_count', 'desc', 'last')
        .groupBy('products.id')
        .paginate({
            perPage: per_page,
            currentPage: page
        })
    return rows

}

export default getMostPopularProductsQuery