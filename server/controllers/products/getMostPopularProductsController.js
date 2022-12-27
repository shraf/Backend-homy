import getMostPopularProductsQuery from "../../database/queries/products/getMostPopularProductsQuery.js"

const getMostPopularProductsController = async (req, res, next) => {
    try {
        const { page, category_id, brand, name, min, max } = req.query
        const rows = await getMostPopularProductsQuery({ page }, {
            category_id,
            brand,
            name,
            price: {
                min, max
            }
        })
        return res.json({
            message: "success",
            data: rows
        })
    }
    catch (err) {
        next(err)
    }
}

export default getMostPopularProductsController