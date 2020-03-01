var array = [2, 3, 4, 5, 4, 6, 2, 8, 9, 7];
var new_array = [];

for( i = 0; i < array.length; i++) {
    var element = array[i];
    var index = new_arry.indexOf(element);
    if ( index == -1){
        new_array.push(element);

    }
}
console.log(new_array);