const selectCarElement = document.querySelector("#car-select");
const selectInputElement = document.querySelector("#distance");
const errorMessageElement = document.querySelector("#error");
const btnElement = document.querySelector(".btn");

// Sortering af bilerne i alfabetisk rækkefølge: (taget fra chatgpt)
[...selectCarElement.options].sort((a, b) => a.text.localeCompare(b.text))
    .forEach(option => selectCarElement.add(option));


function getCo2Calculation() {
    const distance = selectInputElement.value;
    const usersCarEmissionValuePrKM = selectCarElement.value;

    // Validate the input
    if (isNaN(distance) || distance <= 0) {
        errorMessageElement.textContent = "Please enter a valid distance";
        return;
    } else {
        errorMessageElement.textContent = ""; // Clear the error message
    }

    if (distance > 100) {
        document.querySelector("#fun-fact").textContent =
            "100 km? You must really hate the planet. Or just hate yourself.";
    } else if (distance >= 50) {
        document.querySelector("#fun-fact").textContent =
            "50 km a day? You’re basically a carbon-spewing machine at this point.";
    } else if (distance >= 40) {
        document.querySelector("#fun-fact").textContent =
            "40 km a day? Hope you're proud";
    } else if (distance >= 30) {
        document.querySelector("#fun-fact").textContent =
            "30 km? Keep driving, the ice caps aren’t melting fast enough.";
    } else if (distance >= 20) {
        document.querySelector("#fun-fact").textContent =
            "20 km a day? Bet you think recycling that bottle makes up for this, huh?";
    } else if (distance >= 10) {
        document.querySelector("#fun-fact").textContent =
            "10 km? Walking exists, you know. But sure, kill the planet instead.";
    } else if (distance >= 5) {
        document.querySelector("#fun-fact").textContent =
            "Really? It’s like you’re allergic to exercise and common sense.";
    } else {
        document.querySelector("#fun-fact").textContent =
            "Get off your lazy ass and walk. You’re killing us all.";
    }

    const dailyCo2 = distance * usersCarEmissionValuePrKM;
    const monthlyCo2 = dailyCo2 * 30 / 1000; // Convert to kg
    const yearlyCo2 = dailyCo2 * 365 / 1000; // Convert to kg


    document.querySelector("#monthly-co2").textContent = `${monthlyCo2.toFixed(2)}`;
    document.querySelector("#yearly-co2").textContent = `${yearlyCo2.toFixed(2)}`;
}

btnElement.addEventListener("click", getCo2Calculation);
selectInputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Check if the "Enter" key is pressed
        getCo2Calculation();
    }
});