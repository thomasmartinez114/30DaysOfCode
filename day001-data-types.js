// Task
// Complete the code in the editor below. The variables , , and  are already declared and initialized for you. You must:

// Declare  variables: one of type int, one of type double, and one of type String.
// Read  lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
// Use the  operator to perform the following operations:
// Print the sum of  plus your int variable on a new line.
// Print the sum of  plus your double variable to a scale of one decimal place on a new line.
// Concatenate  with the string you read as input and print the result on a new line.
// Note: If you are using a language that doesn't support using  for string concatenation (e.g.: C), you can just print one variable immediately following the other on the same line. The string provided in your editor must be printed first, immediately followed by the string you read as input.

process.stdin.resume()
process.stdin.setEncoding("ascii")

var input_stdin = ""
var input_stdin_array = ""
var input_currentline = 0

process.stdin.on("data", function (data) {
  input_stdin += data
})

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n")
  main()
})

// Reads complete line from STDIN
function readLine() {
  return input_stdin_array[input_currentline++]
}

function main() {
  var i = 4
  var d = 4.0
  var s = "HackerRank "
  // Declare second integer, double, and String variables.
  let i2
  let d2
  let s2
  // Read and save an integer, double, and String to your variables.
  i2 = parseInt(readLine())
  d2 = parseFloat(readLine())
  s2 = readLine()
  // Print the sum of both integer variables on a new line.
  console.log(i + i2)
  // Print the sum of the double variables on a new line.
  console.log((d + d2).toFixed(1))
  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + s2)
}
