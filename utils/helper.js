const responder = (res,message, data = []) => {
    res.status(200).json({
        message,
        data
    })

    res.end()
}  

module.exports =  responder