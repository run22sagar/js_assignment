function isperfect(num) {
    let sum = 0;
    if(num > 0){
        for(let i = 1; i < num; i++){
            if(num%i == 0){
                sum += i;
            }
        }
        if(sum == num){
            alert("The number is a perfect number.");
        }
        else{
            alert("The number is not a perfect number.");
        }
    }
    else{
        alert("The number has to be positive.");
    }
}

 let num = prompt("Enter a positive integer:");
 isperfect(num);