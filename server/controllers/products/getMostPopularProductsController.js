import getMostPopularProductsQuery from "../../database/queries/products/getMostPopularProductsQuery.js"

const getMostPopularProductsController = async (req, res, next) => {
    try {
        const page = req.params.page
        const rows = await getMostPopularProductsQuery({ page })
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