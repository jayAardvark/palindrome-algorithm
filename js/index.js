function palindrome(str) {
  
  let strArr = [];
  let strArrRev = [];
  let regStr;
  regStr = str.toLowerCase().match(/[A-Za-z0-9]/g)
  let contrlStrArr = str.toLowerCase().match(/[A-Za-z0-9]/g)
  console.log(regStr + " regStr");
  
  strArr = regStr;
  strArrRev = strArr.reverse();
  console.log(strArr + " normal")
  console.log(contrlStrArr)
  console.log(strArrRev + " reverse")

  for (let i = 0; i < contrlStrArr.length; i++){
    if (contrlStrArr[i] != strArrRev[i]){
      console.log(contrlStrArr[i],strArrRev[i] + " derp");
      console.log("false")
      return false
    }
  }console.log("true")
 
  return true
  
}

palindrome("0_0 (: /-\ :) 0-0");
/*
1. convert string to lower case
2. convert string to array containing only alphanumerics. 
3. create an array that's the reverse of the original.
4. compare the two.
*/
