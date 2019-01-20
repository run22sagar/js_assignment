//check whether the number entered by the user is a strong number or not.

 'use strict';

 function fact(num) {
     if(num == 0){
         return 1;
     }
     else{
         return num*fact(num-1);
     }
 }

 function isStrong(num){
    let temp = num;
    let r, sumOfFact = 0;
    while(temp != 0){
        r = temp%10;
        sumOfFact += fact(r);
        temp = (temp-r)/10;
    }
    if(sumOfFact == num){
        alert("The number is a strong number.");
    }
    else{
        alert("The number is not a strong number.");
    }
 }

 let num = prompt("Enter a positive number: ");
 isStrong(num);