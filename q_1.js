'use strict';

    const age = (birth_year,future_year) => 
{
    console.log("I will be either " + (future_year-birth_year-1) + " or " + (future_year-birth_year) + " in " + future_year);
}

//defining variables
 const birth_year = 1999;
 const future_year = 2020;

 //calling function
 age(birth_year,future_year);