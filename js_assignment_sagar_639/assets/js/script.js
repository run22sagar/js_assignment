(function rollDice(){
    let dice1 =  Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("player1").src = "assets/images/dice" + dice1 + ".png";
    document.getElementById("player2").src = "assets/images/dice" + dice2 + ".png";
    if(dice1 > dice2){
        document.getElementById("result").innerHTML = "Player 1 wins!!";
    }
    else if(dice1 < dice2) {
        document.getElementById("result").innerHTML = "Player 2 wins!!";
    }
    else{
        document.getElementById("result").innerHTML = "It's a draw!!";
    }
})();