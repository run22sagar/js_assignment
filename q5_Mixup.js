'use strict';

 const mixUp = (str1,str2) => {
    return str2.slice(0,2) + str1.slice(2) + " " + str1.slice(0,2) + str2.slice(2);
 }


 let str1 = "mixed";
 let str2 = "pod";
 if(str1.length > 2 && str2.length > 2) {
    console.log(mixUp(str1, str2));
 }
 else{
     console.log("The strings must have a minimum length of 2")
 }