function uniqString(str){
    var str = str;
    var uniq=" ";
    for(var i = 0; i < str.length; i++){
        console.log(uniq.indexOf(str.charAt(i)));
        if(uniq.indexOf(str.charAt(i)) == -1){
            uniq +=  str[i];
            console.log(uniq);
        }
    }
    return uniq;
}
console.log(uniqString("rubber"));
