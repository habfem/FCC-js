function palindrome(str) {
  //Remove  all non-alphanumeric characters (punctuation, spaces and symbols) and turn to lowercase
  let strToCheck = str.toLowerCase().replace(/\s+|\W+|_+/g, "");
  
  //reverse it
  let reversedStrToCheck = strToCheck.split("").reverse().join("");
  
  //And check
  return (strToCheck === reversedStrToCheck ? true : false);
}

console.log(palindrome("A man, a plan, a canal. Panama")); // for debugging
palindrome("eye"); // for debugging