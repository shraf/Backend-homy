import clearUserCartQuery from "../../database/queries/carts/clearUserCartQuery.js"
import { getAvailableCartsQuery } from "../../database/queries/carts/getUserCartsQuery.js"

const clearUserCartController = async(req, res, next)=>{
    try{
        const {id} = req.user
        const cart = await getAvailableCartsQuery(id)
        await clearUserCartQuery(cart.id)
        return res.status(204).send() 
    }
    catch(err){
        next(err)
    }
}

export default clearUserCartController