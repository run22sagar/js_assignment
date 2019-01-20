'use strict';

const findDivision = (per) => {
    if (per >= 80){
        console.log("Distinction");
    }
    else if (per >= 60){
        console.log("First Division");
    }
    else if (per >= 40){
        console.log("Second Division");
    }
    else if (per >= 32){
        console.log("Third Division");
    }
    else {
        console.log("Fail");
    }
}

findDivision(77);