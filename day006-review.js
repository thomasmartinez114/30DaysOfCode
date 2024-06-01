// Objective
// Today we will expand our knowledge of strings, combining it with what we have already learned about loops. Check out the Tutorial tab for learning materials and an instructional video.

/*
TASK: Given a string, , of length  that is indexed from 0 to N - 1 , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

string = adbecf

print abc def

*/

//    console.log(input)

// get string
// loop over each letter in string
// check if index of letter is  odd or even
// if even, push into evenNums[]
// if odd, push into oddNums[]
// return 'evenNums oddNumbs'

let input = "2\nHacker\nRank"

let letters = input.split("")
console.log(letters)

// console.log(letters)
// remove first 2 indexes which are 2 and \n
letters.shift()
letters.shift()
console.log("New letters: ", letters)
let evenNums = []
let oddNums = []

for (i = 0; i < letters.length; i++) {
  // console.log(letters.indexOf(letters[i]))
  if (letters.indexOf(letters[i]) % 2 === 0) {
    evenNums.push(letters[i])
  } else {
    oddNums.push(letters[i])
  }
}

console.log(evenNums)
console.log(oddNums)
