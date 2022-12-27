import queryBuilder from "../../config/queryBuilder.js"

const getAllProductsQuery = async (pagination = { page: 1, per_page: 12 }, filter = {
    category_id: undefined,
    price: { min: 0, max: Number.MAX_VALUE },
    brand: undefined,
    name: undefined
}) => {
    const { page, per_page } = pagination
    const { category_id, price, brand, name } = filter
    const rows = queryBuilder.select()
        .from('products')
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

    return await rows.paginate({
        perPage: per_page,
        currentPage: page
    })
}

export default getAllProductsQuery