var mamun = 850;
var Hasib = 750; 
var Sakib = 550;
var max = Math.max(mamun, Hasib, Sakib);
console.log("Max is: ",max);
if( mamun > Hasib ){
    if( mamun > Sakib ){
        console.log("Mamun is Bigger");
    }
    else{
        console.log("Sakib is Bigger");
    }
}
else{
    if( Hasib > Sakib ){
        console.log("Hasib is bigger");
    }
    else{
        console.log("Sakib is bigger");
    }
}
