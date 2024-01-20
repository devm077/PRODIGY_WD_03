let currentPlayer = 'O'
board = ['', '', '', '', '', '', '', '', '']
gameOn = true

let handleClick = (index) => {
    if (board[index] === '' && gameOn) {
        document.getElementsByClassName("cell")[index].innerText = currentPlayer
        board[index]=currentPlayer
        if (checkWin()) {
            document.getElementById('result').innerText = `Player ${currentPlayer} Wins!!`
            gameOn = false
        }
        else if (board.every(cell => cell !== '')) {
            document.getElementById('result').innerText = `Match Tied`
            gameOn = false
        }
        else {
            currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
        }
    }

}

let checkWin = () => {
    const winCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    return winCombination.some(combination => combination.every(index => board[index] === currentPlayer));
}

let reset = () => {
    currentPlayer = 'O'
    board = ['', '', '', '', '', '', '', '', '']
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("cell")[i].innerText=''
    }
    document.getElementById('result').innerText=''
    gameOn = true
}