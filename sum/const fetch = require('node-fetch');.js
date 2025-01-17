const fetch = require('node-fetch');

async function getAccessToken() {
    const url = "https://iam.cloud.ibm.com/identity/token";
    const params = new URLSearchParams();
    params.append("grant_type", "urn:ibm:params:oauth:grant-type:apikey");
    params.append("apikey", "ApiKey-2d3fba46-3246-43cf-b294-0385100d6f00");

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params
    });

    if (response.ok) {
        const data = await response.json();
        console.log("Access Token:", data.access_token);
    } else {
        console.error("Error:", response.status, await response.text());
    }
}

getAccessToken();
