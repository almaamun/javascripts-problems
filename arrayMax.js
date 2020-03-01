var marks = [2 , 3, 4, 5, 6, 7, 8, 9];
var max = marks[0];
for( i = 0; i < marks.length; i++){
    var element = marks[i];
    if( element > max){
        max = element;
    }
}
console.log("Highest Value is: " ,max);
var array = [ 22, 69, 8, 5, 10, 87, 90];
var small = array[0];
for( i = 0; i < array.length; i++) {
    var element = array[i];
    if( element < small){
        small = element;
    }
}
console.log("The highest value is: ", max);