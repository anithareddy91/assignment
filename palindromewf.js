var num;
function palindromeNum(num){
    var newNum = num.split("").reverse().join("");
    if(newNum == num ){
        console.log("palindrome");
    }
    return;
}
palindromeNum("121");
palindromeNum("456");