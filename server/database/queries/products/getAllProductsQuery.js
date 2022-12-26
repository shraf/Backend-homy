import queryBuilder from "../../config/queryBuilder.js"

const getAllProductsQuery = async (pagination = { page: 1, per_page: 12 }) => {
    const {page, per_page} = pagination
    const rows = await queryBuilder.select()
    .from('products')
    .paginate({
        perPage: per_page,
        currentPage: page
    })
    return rows 
}

export default getAllProductsQuery