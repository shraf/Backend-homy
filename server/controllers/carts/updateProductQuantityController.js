import updateProductQuantityQuery from "../../database/queries/carts/updateProductQuantityQuery.js"
import { getAvailableCartsQuery } from '../../database/queries/carts/getUserCartsQuery.js';

const updateProductQuantityController = async (req, res, next) => {
    try {
        const { id } = req.user
        const { quantity } = req.body.product
        const product_id = req.params.id
        const cart = await getAvailableCartsQuery(id)
        const cart_id = cart.id
        await updateProductQuantityQuery(cart_id, product_id, quantity)
        res.status(200).send()
    }
    catch (err) {
        next(err)
    }
}

export default updateProductQuantityController