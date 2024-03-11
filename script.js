let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingE1 = document.getElementById("loading");


function sendPostRequest() {
    let userId = userInputEl.value;
    let url = "https://gorest.co.in/public-api/users/" + userId;
    let requestBody = requestBodyEl.value;
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 484799c35c5c500a47c5306facb3212419c7e2dc1dc18546ec4b04b4cab4f0f4",
        },
        body: requestBody
    };
    loadingE1.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusEl.classList.remove("d-none");
            loadingE1.classList.add("d-none");

            let requestStauts = jsonData.code;

            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStauts;
            httpResponseEl.textContent = httpResponse;
        });
}
sendPutRequestBtnEl.addEventListener("click", sendPostRequest);