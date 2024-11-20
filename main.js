const box = document.querySelectorAll('.box');
const h1 = document.querySelector('.title');
const restartGame = document.querySelector('.restart-game');
let clickCounter = 0;


box.forEach((e, i) => {
    e.addEventListener('click', function handleClick() {
        clickCounter++;
        if (clickCounter === 1) {
            box[i].textContent = "X";
        } else if (clickCounter === 2) {
            box[i].textContent = "O";
        } else if (clickCounter === 3) {
            box[i].textContent = "X";
        } else if (clickCounter === 4) {
            box[i].textContent = "O";
        } else if (clickCounter === 5) {
            box[i].textContent = "X";
        } else if (clickCounter === 6) {
            box[i].textContent = "O";
        } else if (clickCounter === 7) {
            box[i].textContent = "X";
        } else if (clickCounter === 8) {
            box[i].textContent = "O";
        } else if (clickCounter === 9) {
            box[i].textContent = "X";
        }

        if (box[0].textContent === "X" && box[1].textContent === "X" && box[2].textContent === "X") {
            h1.textContent = 'X IS THE WINNER!!!';
            disableClick();
        } else if (box[3].textContent === "X" && box[4].textContent === "X" && box[5].textContent === "X") {
            h1.textContent = 'X IS THE WINNER!!!';
            disableClick();
        }
        else if (box[6].textContent === "X" && box[7].textContent === "X" && box[8].textContent === "X") {
            h1.textContent = 'X IS THE WINNER!!!';
            disableClick();
        }
        else if (box[0].textContent === "X" && box[3].textContent === "X" && box[6].textContent === "X") {
            h1.textContent = 'X IS THE WINNER!!!';
            disableClick();
        }
        else if (box[1].textContent === "X" && box[4].textContent === "X" && box[7].textContent === "X") {
            h1.textContent = 'X IS THE WINNER!!!';
            disableClick();
        }
        else if (box[2].textContent === "X" && box[5].textContent === "X" && box[8].textContent === "X") {
            h1.textContent = 'X IS THE WINNER!!!';
            disableClick();
        }
        else if (box[0].textContent === "X" && box[4].textContent === "X" && box[8].textContent === "X") {
            h1.textContent = 'X IS THE WINNER!!!';
            disableClick();
        }
        else if (box[2].textContent === "X" && box[4].textContent === "X" && box[6].textContent === "X") {
            h1.textContent = 'X IS THE WINNER!!!';
            disableClick();
        }

        if (box[0].textContent === "O" && box[1].textContent === "O" && box[2].textContent === "O") {
            h1.textContent = 'O IS THE WINNER!!!';
            disableClick();
        } else if (box[3].textContent === "O" && box[4].textContent === "O" && box[5].textContent === "O") {
            h1.textContent = 'O IS THE WINNER!!!';
            disableClick();
        } else if (box[6].textContent === "O" && box[7].textContent === "O" && box[8].textContent === "O") {
            h1.textContent = 'O IS THE WINNER!!!';
            disableClick();
        } else if (box[0].textContent === "O" && box[3].textContent === "O" && box[6].textContent === "O") {
            h1.textContent = 'O IS THE WINNER!!!';
            disableClick();
        } else if (box[1].textContent === "O" && box[4].textContent === "O" && box[7].textContent === "O") {
            h1.textContent = 'O IS THE WINNER!!!';
            disableClick();
        } else if (box[2].textContent === "O" && box[5].textContent === "O" && box[8].textContent === "O") {
            h1.textContent = 'O IS THE WINNER!!!';
            disableClick();
        } else if (box[0].textContent === "O" && box[4].textContent === "O" && box[8].textContent === "O") {
            h1.textContent = 'O IS THE WINNER!!!';
            disableClick();
        } else if (box[2].textContent === "O" && box[4].textContent === "O" && box[6].textContent === "O") {
            h1.textContent = 'O IS THE WINNER!!!';
            disableClick();
        }

        if (clickCounter === 9 && h1.textContent === "Tic Tac Toe") {
            h1.textContent = "IT'S A TIE!!!";
            disableClick();
        }

        function disableClick() {
            box.forEach(element => {
                element.removeEventListener('click', handleClick());
            });
        }

    }, { once: true });


});

restartGame.addEventListener('click', function () {
    location.reload();
})

