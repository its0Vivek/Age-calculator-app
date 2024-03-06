const day = document.querySelector("#day-input");
const month = document.querySelector("#month-input");
const year = document.querySelector("#year-input");
const circle = document.querySelector("#circle");
const Fday = document.querySelector("#Fday");
const Fmonth = document.querySelector("#Fmonth");
const Fyear = document.querySelector("#Fyear");

circle.addEventListener("click", function () {
    const getDay = day.value;
    const getMonth = month.value;
    const getYear = year.value;

    if (!getDay > 1 || !getDay < 31) {
        alert("not valid")
    }
    if (!getMonth > 1 || !getMonth < 12) {
        alert("not valid")
    }
    if (!getYear > 19 || !getYear < 31) {
        alert("not valid")
    }
    console.log(verify)

    const getedBirthDay = `${getYear}-${getMonth}-${getDay}`;
    console.log(getedBirthDay)

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
    console.log(birthDateObj)


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
