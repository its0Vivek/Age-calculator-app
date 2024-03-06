const day = document.querySelector("#day-input");
const month = document.querySelector("#month-input");
const year = document.querySelector("#year-input");
const circle = document.querySelector("#circle");
const Fday = document.querySelector("#Fday");
const Fmonth = document.querySelector("#Fmonth");
const Fyear = document.querySelector("#Fyear");
const errorMessages = document.querySelectorAll("h5");
const allInputs = document.querySelectorAll("input");

circle.addEventListener("click", function () {
    const getDay = parseInt(day.value);
    const getMonth = parseInt(month.value);
    const getYear = parseInt(year.value);

    // Error handling for invalid day, month, and year
    if (!(getDay >= 1 && getDay <= 31)) {
        document.querySelector("#dayerr").style.display = "initial";
        document.querySelector("#zday").style.color = "red";
        day.style.border = "1.5px solid red";
        return;
    } else {
        document.querySelector("#dayerr").style.display = "none";
        document.querySelector("#zday").style.color = "black";
        day.style.border = "1.5px solid #727272";
    }
    if (!(getMonth >= 1 && getMonth <= 12)) {
        document.querySelector("#montherr").style.display = "initial";
        document.querySelector("#zmonth").style.color = "red";
        month.style.border = "1.5px solid red";
        return;
    } else {
        document.querySelector("#montherr").style.display = "none";
        document.querySelector("#zmonth").style.color = "black";
        month.style.border = "1.5px solid #727272";
    }
    if (!(getYear >= 1900 && getYear <= 2023)) {
        document.querySelector("#yearerr").style.display = "initial";
        document.querySelector("#zyear").style.color = "red";
        year.style.border = "1.5px solid red";
        return;
    } else {
        document.querySelector("#yearerr").style.display = "none";
        document.querySelector("#zyear").style.color = "black";
        year.style.border = "1.5px solid #727272";
    }

    // Reset border style for all inputs
    allInputs.forEach(input => input.style.border = "1.5px solid #727272");

    const getedBirthDay = `${getYear}-${getMonth}-${getDay}`;

    // Calculate age
    const age = calculateAge(getedBirthDay);

    // Display the result in the respective elements
    Fyear.textContent = age.days;
    Fmonth.textContent = age.months;
    Fday.textContent = age.years;
});

function calculateAge(birthDate) {
    // Get the current date
    const currentDate = new Date();

    // Parse the birth date string to create a Date object
    const birthDateObj = new Date(birthDate);

    // Check if the birth date is valid
    if (isNaN(birthDateObj.getTime())) {
        return "Invalid date";
    }

    // Calculate the difference in milliseconds
    const difference = currentDate - birthDateObj;

    // Convert the difference to years
    const ageInYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

    // Calculate the remaining difference after removing the years
    let remainingDifference = difference - (ageInYears * 1000 * 60 * 60 * 24 * 365.25);

    // Convert the remaining difference to months
    const ageInMonths = Math.floor(remainingDifference / (1000 * 60 * 60 * 24 * 30.44));

    // Calculate the remaining difference after removing the months
    remainingDifference -= ageInMonths * 1000 * 60 * 60 * 24 * 30.44;

    // Convert the remaining difference to days
    const ageInDays = Math.floor(remainingDifference / (1000 * 60 * 60 * 24));

    // Return an object containing years, months, and days
    return {
        years: ageInYears,
        months: ageInMonths,
        days: ageInDays
    };
}
