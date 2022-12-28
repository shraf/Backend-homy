import { getAvailableCartsQuery, getUserCartQuery } from "../../database/queries/carts/getUserCartsQuery.js"

const getUserData = async (req, res, next) => {
    try {
        const cart = await getUserCartQuery(req.user.id)
        return res.json({
            messsage: "success",
            data: { ...req.user, cart: cart, token: req.headers.token.split('Bearer')[1].trimStart() }
        })
    }
    catch (err) {
        next(err)
    }
}

export default getUserData