// link : https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
// solution
function gimme (triplet) {
    let newArr = [...triplet].sort((a,b) => a - b);
    
    
    return triplet.indexOf(newArr[1]);
  }