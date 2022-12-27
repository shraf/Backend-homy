import queryBuilder from "../../config/queryBuilder.js"

const getTopSellingProductsQuery = async (pagination = { page: 1, per_page: 12 }, filter = {
    category_id: undefined,
    price: { min: 0, max: Number.MAX_VALUE },
    brand: undefined,
    name
}) => {
    const { page, per_page } = pagination
    const{category_id, price, brand, name} = filter
    const rows = queryBuilder.select('products.*')
        .sum({ selling_count: 'quantity' })
        .from('products')
        .leftJoin('cart_product', 'cart_product.product_id', '=', 'products.id')

    if (category_id)
        rows.where({ category_id })
    if (brand)
        rows.where({ brand })
    if (name)
        rows.whereILike('name', `%${name}%`)
    if (!price.min)
        price.min = 0
    if (!price.max)
        price.max = Number.MAX_VALUE
    rows.whereBetween('price', [price.min, price.max])


    return await rows.orderBy('selling_count', 'desc', 'last')
        .groupBy('products.id')
        .paginate({
            perPage: per_page,
            currentPage: page
        })

}

export default getTopSellingProductsQuery