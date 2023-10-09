//link to solution: https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

//solution
function sumTwoSmallestNumbers(numbers) {  
    let sortedNums = numbers.sort((a,b) => a-b)
   
    return sortedNums[0] + sortedNums[1];
  }