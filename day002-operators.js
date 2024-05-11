// Task
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

// Example

// A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value  and return from the function.

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

let meal_cost = 12.0
let tip_percent = 20
let tax_percent = 8

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  let tip = meal_cost * (tip_percent / 100)
  // console.log(tip)
  let tax = meal_cost * (tax_percent / 100)
  // console.log(tax)
  let total_cost = Math.floor(meal_cost + tip + tax)
  console.log(total_cost)
}

solve(meal_cost, tax_percent, tip_percent)
