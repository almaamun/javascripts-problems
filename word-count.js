var speech = "O Allah please help me to become a web developer";
var count = 0;
for( i = 0; i <speech.length; i++){
    var char = speech[i];
    if( char == " "){
        count++;

    }
}
count++;
console.log(count);