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

// module.exports = {
//      tot_temperature_in_fahrenheit,
//      tot_temperature_in_celsius,
//      avg_temperature_in_fahrenheit,
//      avg_temperature_in_celsius
// };

//  Define Temperature Data
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;


//  Conversion functions
function fToC(f) {
    return (f - 32) * 5 / 9;
}

function cToF(c) {
    return (c * 9 / 5) + 32;
}

//  Calculate total temperatures
let tot_temperature_in_fahrenheit = day1TempF + cToF(day2TempC) +
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

let tot_temperature_in_celsius = fToC(day1TempF) + day2TempC +
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

// Export variables
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};

// Display results
console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total Celsius:", tot_temperature_in_celsius);
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Celsius:", avg_temperature_in_celsius);