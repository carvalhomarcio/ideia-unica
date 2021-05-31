function tempo (request, response){
    const dynamicDate = new Date();
    response.json({
        date: dynamicDate.toGMString()
    })
}

export default tempo;