const winningCombinations = [[0, 1, 2], [0, 3, 6], [1, 4, 7], [3, 4, 5], [2, 5, 8], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
const aCombinations = [];
const bCombinations = [];

let isATurn = true;
let gridCount = 0;

function onClickStart() {
    document.getElementsByClassName("message")[0].innerText = `A's turn`;
    const grid = Array.from(document.getElementsByClassName("cell"));
    grid.forEach(cell => {
        cell.addEventListener("click", function () {
            cell.innerText = isATurn ? 'X' : 'O';
            cellIndex = grid.indexOf(cell);
            isATurn ? fillGrid(aCombinations, 'B', grid, cellIndex) : fillGrid(bCombinations, 'A', grid, cellIndex);
            isATurn = !isATurn;
            cell.classList.add("disable");
        })
    })
}

function fillGrid(list, nextPlayer, grid, cellIndex) {
    document.getElementsByClassName("message")[0].innerText = `${nextPlayer}'s turn`
    list.push(cellIndex);
    winningCombinations.forEach(combination => {
        if (combination.every(ele => list.includes(ele))) {
            document.getElementsByClassName("message")[0].innerText = nextPlayer == 'A' ? `B is Winner` : 'A is Winner';
            grid.forEach(ele => {
                ele.classList.add("disable");
            })
        }
    })
}

function onClickReStart() {
    location.reload();
    onClickStart();
}