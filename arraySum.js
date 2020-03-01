var array = [1, 2, 3, 4, 5, 6, 7,  8, 9 ,6 ];

function getArraySum( array ){
    for( i = 0; i < array.length; i++) {
        element = array[i];
        sum = element + sum;
    }
    return sum;
}
var array = [1, 2, 3, 4, 5, 6, 7,  8, 9 ,6 ];
sum = 0;
var result = getArraySum(array);
console.log(result);