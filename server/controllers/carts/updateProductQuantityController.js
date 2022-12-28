import updateProductQuantityQuery  from "../../database/queries/carts/updateProductQuantityQuery.js"

const updateProductQuantityController = async (req, res, next) => {
    try {
        const { id } = req.user
        const { quantity } = req.body.product
        const product_id = req.params.id
        await updateProductQuantityQuery(id, product_id, quantity)
        res.status(200).send()
    }
    catch (err) {
        next(err)
    }
}

export default updateProductQuantityController