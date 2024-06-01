/* 
#Task
Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

#Example
Print 4 3 2 1. Each integer is separated by one space.
*/

reverseArr = () => {
  let numbers = [1, 2, 4, 3]
  let largestNum = 0
  let numberSort = []

  for (let i = 0; i < numbers.length; i++) {
    largestNum = 0
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > largestNum) {
        largestNum = numbers[j]
      }
    }

    numberSort.push(largestNum)
    numbers.splice(numbers.indexOf(largestNum), 1)
    i = 0

    // pop last element in numbers since the array length is 1
    if (numbers.length == 1) {
      numberSort.push(numbers[0])
      numbers.pop()
    }
  }

  //   console.log(numbers)
  console.log(numberSort)
}

reverseArr()
