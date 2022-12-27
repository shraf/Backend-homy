import getAllProductsQuery from "../../database/queries/products/getAllProductsQuery.js"

const getProductsController = async (req, res, next) => {
    try {
        const {page, per_page, category_id, brand, name, min, max } = req.query
        const rows = await getAllProductsQuery({ page, per_page }, {
            category_id, 
            brand,
            name,
            price: {
                min, max
            }
        })
        return res.json(rows)
    }
    catch (err) {
        next(err)
    }
}

export default getProductsController