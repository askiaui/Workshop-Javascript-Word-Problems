/*1.Reverse string

function reverseString(eagles) {
    var newString = "";
    for (var i = eagles.length - 1; i >= 0; i--) {
        newString += eagles[i];
    }
    return newString;
 }
    console.log(newString); */

/*2. FIZZBUZZ */

/*for(i = 0; i <= 20; i++){
    if(i % 3 == 0 && i % 5 == 0){
    console.log("fizzBuzz");
    }else if(i % 3 == 0){
    console.log("fizz");
    }else if(i % 5 == 0){
    console.log("buzz");
    }else{
    console.log(i);
    };
    
    };*/

/* 3 Pig Latin */
function translatePigLatin(str){
    
    var firstPostion = findFirstVowelPosition(str);
    if (firstPosition > 0){
        return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
    }
    return str + "way";   
}

function findFirstVowelPosition(str){
    for(var i=0; i<str.length; i++){
      if ("aeiou" .indexOf(str[i]) !== 1){
          return i; 
      }
    }
}





