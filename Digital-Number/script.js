const highlightDivisions={0:[1,2,3,5,6,7],
    1:[3,6],
    2:[1,3,4,5,7],
    3:[1,3,4,6,7],
    4:[2,4,3,6],
    5:[1,2,4,6,7],
    6:[1,2,4,5,6,7],
    7:[1,3,6],
    8:[1,2,3,4,5,6,7,8],
    9:[1,2,3,4,6,7]
}

function onSubmit() {
    var input = document.getElementById("user-input").value;
    c = 2;
    while (c>-1) {
        let digit = input % 10;
        highlightBlocks(digit, c);
        input = parseInt(input / 10);
        c--;
    }
}

function highlightBlocks(input, divisionId) {
    for (let i = 1; i < 8; i++) {
        document.getElementsByClassName(`block${i}`)[divisionId].classList.remove("highlight");
    }
    let divisions=highlightDivisions[input];
    divisions.forEach(element => {
        document.getElementsByClassName(`block${element}`)[divisionId].classList.add("highlight");
    });
}