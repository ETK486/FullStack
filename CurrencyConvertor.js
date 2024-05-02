function CurrencyConvertor(country, amount) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        var response = JSON.parse(this.responseText);
        if (response.result === "success") {
            var rate = response.conversion_rates[country];
            if (rate !== undefined) {
                var convamount = rate * amount;
                console.log(convamount);
            }
            else {
                console.error("Conversion rate for ".concat(country, " not found."));
            }
        }
        else {
            console.error("An error occurred while fetching currency data.");
        }
    });
    oReq.addEventListener("error", function () {
        console.error("An error occurred while fetching currency data.");
    });
    oReq.open("GET", "https://v6.exchangerate-api.com/v6/375c6d6d2a8584098b5bf56e/latest/INR");
    oReq.send();
}
// Convert 100 USD to EUR
