'use strict';

 function length(string){
     string += '\n';
     let len = 0;
     let i = 0;
     while(string.slice(i,i+1) !== '\n'){
         len++;
         i++;
     }
     alert("Input string: " + string + "\nOutput: " + len);
 }

 //reading input string from index.js
 let string = prompt('Enter String: ');
 length(string);