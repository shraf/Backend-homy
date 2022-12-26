import queryBuilder from "../../config/queryBuilder.js"

const createUserCartQuery =async (user_id)=>{
    const new_cart_id = await queryBuilder
    .returning('id')
    .insert({
        user_id
    })
    .into('cart')

    return new_cart_id
}

export default createUserCartQuery