import getAllProductsQuery from "../../database/queries/products/getAllProductsQuery.js"

const getProductsController = async (req, res, next) => {
    try {
        const { page, per_page } = req
        const rows = await getAllProductsQuery({ page, per_page })
        return res.json(rows)
    }
    catch (err) {
        next(err)
    }
}

export default getProductsController