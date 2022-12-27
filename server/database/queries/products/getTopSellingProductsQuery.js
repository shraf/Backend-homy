import queryBuilder from "../../config/queryBuilder.js"

const getTopSellingProductsQuery = async (pagination = { page: 1, per_page: 12 }, category_id) => {
    const { page, per_page } = pagination
    const rows = category_id
        ? await queryBuilder.select('products.*')
            .sum({ selling_count: 'quantity' })
            .from('products')
            .leftJoin('cart_product', 'cart_product.product_id', '=', 'products.id')
            .where({ category_id })
            .orderBy('selling_count', 'desc', 'last')
            .groupBy('products.id')
            .paginate({
                perPage: per_page,
                currentPage: page
            })
        : await queryBuilder.select('products.*')
            .sum({ selling_count: 'quantity' })
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

export default getTopSellingProductsQuery