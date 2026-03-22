//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//  Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//  Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
     tot_temperature_in_fahrenheit,
     tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};

//  Define Temperature Data
let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
let day5TempF = 80;
let day6TempC = 15;
let day7TempF = 72;
let day8TempC = 28;
let day9TempF = 68;
let day10TempC = 20;
let day11TempF = 75;
let day12TempC = 23;
let day13TempF = 82;
let day14TempC = 30;
let day15TempF = 65;
let day16TempC = 22;
let day17TempF = 77;
let day18TempC = 26;
let day19TempF = 78;
let day20TempC = 24;
let day21TempF = 73;
let day22TempC = 21;
let day23TempF = 79;
let day24TempC = 27;
let day25TempF = 71;
let day26TempC = 19;
let day27TempF = 74;
let day28TempC = 17;
let day29TempF = 76;
let day30TempC = 29;

//  Conversion functions
function fToC(f) {
    return (f - 32) * 5 / 9;
}

function cToF(c) {
    return (c * 9 / 5) + 32;
}

//  Calculate total temperatures
let tot_temperature_in_fahrenheit =
    day1TempF + cToF(day2TempC) +
    day3TempF + cToF(day4TempC) +
    day5TempF + cToF(day6TempC) +
    day7TempF + cToF(day8TempC) +
    day9TempF + cToF(day10TempC) +
    day11TempF + cToF(day12TempC) +
    day13TempF + cToF(day14TempC) +
    day15TempF + cToF(day16TempC) +
    day17TempF + cToF(day18TempC) +
    day19TempF + cToF(day20TempC) +
    day21TempF + cToF(day22TempC) +
    day23TempF + cToF(day24TempC) +
    day25TempF + cToF(day26TempC) +
    day27TempF + cToF(day28TempC) +
    day29TempF + cToF(day30TempC);

let tot_temperature_in_celsius =
    fToC(day1TempF) + day2TempC +
    fToC(day3TempF) + day4TempC +
    fToC(day5TempF) + day6TempC +
    fToC(day7TempF) + day8TempC +
    fToC(day9TempF) + day10TempC +
    fToC(day11TempF) + day12TempC +
    fToC(day13TempF) + day14TempC +
    fToC(day15TempF) + day16TempC +
    fToC(day17TempF) + day18TempC +
    fToC(day19TempF) + day20TempC +
    fToC(day21TempF) + day22TempC +
    fToC(day23TempF) + day24TempC +
    fToC(day25TempF) + day26TempC +
    fToC(day27TempF) + day28TempC +
    fToC(day29TempF) + day30TempC;

// Calculate average temperatures
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

// Display results
console.log("Total Temperature in Fahrenheit:", tot_temperature_in_fahrenheit.toFixed(2));
console.log("Total Temperature in Celsius:", tot_temperature_in_celsius.toFixed(2));
console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit.toFixed(2));
console.log("Average Temperature in Celsius:", avg_temperature_in_celsius.toFixed(2));