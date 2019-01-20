'use strict';

const circumference = (r) => {
    console.log("The circumference is " + 2*Math.PI*r);
}

const area = (r) => {
    console.log("The area is " + Math.PI*r**2);
}
 
 const radius = 5;
circumference(radius);
area(radius);