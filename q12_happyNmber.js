'use strict';

 function isHappy(num){
    let sum = 0, itr = 0, temp = num;
    while(itr != 50 ){
        sum = 0;
        while(temp != 0){
            sum += (temp%10)**2;
            temp = (temp-(temp%10))/10;
        }
        if(sum == 1){
            return 1;
        }
        temp = sum;
        itr++;
    }
    return 0;
 }

 let num = prompt("Enter a number: ");
 if(isHappy(num) == 1){
     alert("The number is happy number. :)");
 }
 else{
     alert("Unable to determine if the number is a happy number. :(");
 }