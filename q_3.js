'use strict';
//The Temperature Converter

 const convertToF = (celsius) => {
     return (celsius*1.8+32);
 }

 const convertToC = (fahrenheit) => {
    return (fahrenheit-32)/1.8 ;     
 }

 const temp = 0;
 const fahrenheit = convertToF(temp);
 const celsius = convertToC(fahrenheit);
console.log(celsius + "°C is " + fahrenheit + "F. \n" + fahrenheit + "F is " + celsius + "°C.");
