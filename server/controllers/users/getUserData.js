
const getUserData = async (req, res, next) => {
    return res.json({
        messsage: "success",
        data: { ...req.user, token: req.headers.token.split('Bearer')[1].trimStart() }
    })
}

export default getUserData