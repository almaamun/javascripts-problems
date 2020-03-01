function problem(str){
    for( i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "hello world";
var reverse = "";
var mamun = problem(statement);
console.log(mamun);