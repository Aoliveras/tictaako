console.log('Conected!');


//global variables

var span = document.querySelector('span');
var img0 = "<img src='images/taako0.png'>";
var img1 = "<img src='images/taako1.png'>";
var gamePieces = [img0, img1];
var yourUp = 0;


let r1c1 = document.querySelector('.sq1_1');
let r1c2 = document.querySelector('.sq1_2');
let r1c3 = document.querySelector('.sq1_3');
let r2c1 = document.querySelector('.sq2_1');
let r2c2 = document.querySelector('.sq2_2');
let r2c3 = document.querySelector('.sq2_3');
let r3c1 = document.querySelector('.sq3_1');
let r3c2 = document.querySelector('.sq3_2');
let r3c3 = document.querySelector('.sq3_3');
let reSet = document.querySelector('input');
//const winningCombos = [
 //   [0, 1, 2],
 //   [3, 4, 5],
 //   [6, 7, 8],
 //   [0, 3, 6],
 //   [1, 4, 7],
 //   [2, 5, 8],
 //   [2, 4, 6],
 //   [0, 4, 8]
//];

//functions

// clearBoard.addEventListener('click', function(e) {
    // e.target.innerHtml = currentMove;
    // let nextMove = ( currentMove === "x" ? "o" : "x");
// });

function checkWin() {
    if (r1c1.innerHTML === img1 && r1c2.innerHTML === img1 && r1c3.innerHTML === img1) {
        window.alert('Winner Winner, Wizard 1 gets a tasty chicken dinner!');
    };

    //let cells = table.children;
   // winningCombos.forEach(function(combo) {
       // if (cells[combo[0]].innerHTML === img0 && cells[combo[1]].innerHTML === img0 && cells[combo[2]].innerHTML === img0) {
        //    alert('Winner Winner Chicken Dinner!');
      //  }
   // })
};

function markSquare() {
    if (this.innerHTML == "&nbsp;") {
    this.innerHTML = gamePieces[yourUp];
    if (yourUp === 0) { yourUp = 1;
    span.innerHTML = "2"; 
    } else { yourUp = 0;
    span.innerHTML = "1";
    }
    } else window.alert('Pick another square, ya dingus!');
};

function clearBoard () {
    r1c1.innerHTML = "&nbsp;";
    r1c2.innerHTML = "&nbsp;";
    r1c3.innerHTML = "&nbsp;";
    r2c1.innerHTML = "&nbsp;";
    r2c2.innerHTML = "&nbsp;";
    r2c3.innerHTML = "&nbsp;";
    r3c1.innerHTML = "&nbsp;";
    r3c2.innerHTML = "&nbsp;";
    r3c3.innerHTML = "&nbsp;";
    span.innerHTML = "1";
    yourUp = 0;
};

function main() {
    r1c1.addEventListener('click', markSquare);
    r1c2.addEventListener('click', markSquare);
    r1c3.addEventListener('click', markSquare);
    r2c1.addEventListener('click', markSquare);
    r2c2.addEventListener('click', markSquare);
    r2c3.addEventListener('click', markSquare);
    r3c1.addEventListener('click', markSquare);
    r3c2.addEventListener('click', markSquare);
    r3c3.addEventListener('click', markSquare);
    reSet.addEventListener('click', clearBoard);
    checkWin();
};

main();