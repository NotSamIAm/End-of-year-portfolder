var keys = document.querySelectorAll('td.grid');
var turn = 0;
var tile1 = document.getElementById("1");
var tile2 = document.getElementById("2");
var tile3 = document.getElementById("3");
var tile4 = document.getElementById("4");
var tile5 = document.getElementById("5");
var tile6 = document.getElementById("6");
var tile7 = document.getElementById("7");
var tile8 = document.getElementById("8");
var tile9 = document.getElementById("9");

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", tileClicked, false);
}


function tileClicked() {
    if (turn === 0) {
        if (this.innerHTML === "") {
            this.innerHTML = "X";
            endGame();
            nextTurn();
        }
    } else {
        if (this.innerHTML === "") {
            this.innerHTML = "O";
            endGame();
            nextTurn();
        }
    }
}

function nextTurn() {
    if (turn === 0) {
        turn++;
    } else {
        turn--;
    }
}

function endGame() {
    if (tile1.innerHTML == tile2.innerHTML && tile2.innerHTML == tile3.innerHTML && tile1.innerHTML !== "") {
        gameOver(1);
    } else if (tile1.innerHTML == tile4.innerHTML && tile4.innerHTML == tile7.innerHTML && tile1.innerHTML !== "") {
        gameOver(1);
    } else if (tile2.innerHTML == tile5.innerHTML && tile5.innerHTML == tile8.innerHTML && tile2.innerHTML !== "") {
        gameOver(2);
    } else if (tile3.innerHTML == tile6.innerHTML && tile6.innerHTML == tile9.innerHTML && tile3.innerHTML !== "") {
        gameOver(3);
    } else if (tile4.innerHTML == tile5.innerHTML && tile5.innerHTML == tile6.innerHTML && tile4.innerHTML !== "") {
        gameOver(4);
    } else if (tile7.innerHTML == tile8.innerHTML && tile8.innerHTML == tile9.innerHTML && tile7.innerHTML !== "") {
        gameOver(7);
    } else if (tile1.innerHTML == tile5.innerHTML && tile5.innerHTML == tile9.innerHTML && tile1.innerHTML !== "") {
        gameOver(1);
    } else if (tile3.innerHTML == tile5.innerHTML && tile5.innerHTML == tile7.innerHTML && tile3.innerHTML !== "") {
        gameOver(3);

    }
}

function gameOver(num) {
    if(document.getElementById(num).innerHTML === "X") {
        tile5.innerHTML="X";
    }
    else {
        tile5.innerHTML="O";
    }
    tile1.innerHTML="Y";
    tile2.innerHTML="O";
    tile3.innerHTML="U";
    tile4.innerHTML=" ";
    tile6.innerHTML=" ";
    tile7.innerHTML="W";
    tile8.innerHTML="I";
    tile9.innerHTML="N";
}