//check whether a number entered by the user is magic number or not. The user will enter 1729 input number and program will calculate and check if it is magic number or not and print on the console.

 'use strict';

 function isMagic(num){
    let sum = 0, revSum = 0, temp = num, r;
    //finding sum
    while(temp != 0){
        r = temp%10;
        sum += r;
        temp = (temp-r)/10;
    }
    //reverse of sum
    temp = sum;
    while(temp != 0){
        revSum *= 10;
        revSum += temp%10;
        temp = (temp-(temp%10))/10;
    }
    if(sum * revSum == num){
        return 1;
    }
    else{
        return 0;
    }
 }

 let num = prompt("Enter a number: ");
 if(isMagic(num) == 1){
     console.log("The number is a magic number.");
 }
 else{
     console.log("The number is not a magic number.");
 }

'use strict';

 function isMagic(num){
    let sum = 0, revSum = 0, temp = num, r;
    //finding sum
    while(temp != 0){
        r = temp%10;
        sum += r;
        temp = (temp-r)/10;
    }
    //reverse of sum
    temp = sum;
    while(temp != 0){
        revSum *= 10;
        revSum += temp%10;
        temp = (temp-(temp%10))/10;
    }
    if(sum * revSum == num){
        return 1;
    }
    else{
        return 0;
    }
 }

 let num = prompt("Enter a number: ");
 if(isMagic(num) == 1){
     console.log("The number is a magic number.");
 }
 else{
     console.log("The number is not a magic number.");
 }