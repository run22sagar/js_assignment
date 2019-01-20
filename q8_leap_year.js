'use strict';

 function checkLeapYear(year) {
     if((year%4)%2 == 0){
        if((year%100)%2 == 0){
            if((year%400)%2 == 0){
                return 1;
            }
            else{
                return 0;
            }
        }
        else{
            return 1;
        }
     }
     else{
         return 0;
     }
 }

 if (checkLeapYear(2020) == 1){
    console.log("The year is leap year");
 }
 else{
    console.log("The year is not leap year");
 }