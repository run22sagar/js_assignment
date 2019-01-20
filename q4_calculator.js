'use strict';

 //The calculator 
 function calculator(num) {
     const half = num/2;
     const square = half**2;
     const area = Math.PI*square**2;
     console.log("half of the number : " + half + 
                 "\nsquare of half : " + square + 
                 "\narea of circle with radius " + square + " : " + area);
 }

 calculator(10);