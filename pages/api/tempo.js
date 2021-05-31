async function tempo (request, response){
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponses = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscribersResponsesJson = await subscribersResponses.json();
    const inscritos = subscribersResponsesJson.total_subscribers;

    response.json({
        date: dynamicDate.toGMString(),
        inscritos: inscritos
    })
}

export default tempo;