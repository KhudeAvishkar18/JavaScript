// Base URL for api of currency converter
const baseURL = `https://v6.exchangerate-api.com/v6/f1eab7516de78ffcde6f65aa/latest`;

// Necessary elements
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurrency = document.querySelector(".from select"); // select element
const toCurrency = document.querySelector(".to select"); // select element
const msg = document.querySelector(".msg");

// Adding country codes in dropdown list from codes.js file
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD")
            newOption.selected = "selected";
        else if (select.name === "to" && currCode === "INR")
            newOption.selected = "selected";
        select.append(newOption);
    }

    // If any change happens in select element, this event will trigger
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Updating flag image, when selected another country
const updateFlag = (selectElement) => {
    let currencyCode = selectElement.value;
    let countryCode = countryList[currencyCode];

    let img = selectElement.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Main logic for conversion of currency
const updateExchangeRate = async () => {
    // Getting amount to be converted
    let input = document.querySelector(".amount input");
    let amount = input.value;

    // Handling case where input can be negative or null 
    if (amount === "" || amount < 1 || amount === null) {
        amount = 1;
        input.value = 1;
    }

    // Getting from & to currency codes
    let fromCurr = fromCurrency.value;
    let toCurr = toCurrency.value;

    // Creating new api endpoint based on from & to currency codes and fetching data
    let newURL = `${baseURL}/${fromCurr}`;
    let response = await fetch(newURL);
    let data = await response.json();

    // Updating the msg element with received data
    msg.innerText = `${amount} ${fromCurr} = ${data.conversion_rates[toCurr] * amount} ${toCurr}`;
};

// On loading of the page, by default this will happen
window.addEventListener('load', () => {
    updateExchangeRate();
})

// Adding event listener on button to get final currency conversion
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});