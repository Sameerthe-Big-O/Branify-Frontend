const setupClarifyApi = (imageUrl) => {
    const PAT = '362c9aa3c7964c3aae52c73a40c289e5';
    const USER_ID = 'aysqt5n3wdom';
    const APP_ID = 'my-first-application-f9d6a';
    const IMAGE_URL = imageUrl;


    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    return requestOptions;
}

export default setupClarifyApi;