//link to problem: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
//solution
function isPalindrome(x) {
    let caseSensitivity = x.toLowerCase();
    
    return caseSensitivity === caseSensitivity.split("").reverse().join("") ? true : false;
  }