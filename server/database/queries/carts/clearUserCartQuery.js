import queryBuilder from "../../config/queryBuilder.js"

const clearUserCartQuery = async (cart_id) => {
    await queryBuilder.where({ cart_id })
        .delete()
        .from('cart_product')
}

export default clearUserCartQuery