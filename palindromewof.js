
var num;
function checkPalindrome(num){
    var newNum = [];
    for(var i = num.length-1;i >= 0;i--){
        newNum += num[i];
    }
    if(newNum == num){
        console.log("palindrome");
    } else{
        console.log("not palindrome");
    }
    return newNum;
}
checkPalindrome("1221");
checkPalindrome("12345");