var speech = "O Allah please help me to become a successfull web developer";
count = 0;
for( i = 0; i < speech.length; i++){
    var char = speech[i];
    if( char == "a" || char == "A"){
        count++;
    }
}
console.log(count);