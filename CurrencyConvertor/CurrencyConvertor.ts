function CurrencyConvertor(country: string, amount: number): void {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        const response = JSON.parse(this.responseText);
        if (response.result === "success") {
            const rate = response.conversion_rates[country];
            if (rate !== undefined) {
                const convamount = rate * amount;
                return convamount;
            } else {
                console.error(`Conversion rate for ${country} not found.`);
            }
        } else {
            console.error("An error occurred while fetching currency data.");
        }
    });
    oReq.addEventListener("error", function () {
        console.error("An error occurred while fetching currency data.");
    });
    oReq.open("GET", `https://v6.exchangerate-api.com/v6/375c6d6d2a8584098b5bf56e/latest/INR`);
    oReq.send();
}




