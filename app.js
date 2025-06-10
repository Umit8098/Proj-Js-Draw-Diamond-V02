const input = document.querySelector("input");
const textArea = document.querySelector("textarea");

input.addEventListener("change", function () {
    // console.log(input.value);
    // textArea.innerHTML = input.value;
    let n = Number(input.value);
    textArea.innerHTML = drawDiamond(n);
});


//! Uzun versiyon;
/* 
function drawDiamond(n) {
    let diamond = "";
    let spaces = "";
    let stars = "";
    // Upper part of the diamond
    for (let i = 0; i < n; i++) {
        spaces = "";
        stars = "";
        // Add spaces
        for (let j = n - i; j > 1; j--) {
            spaces += " ";
        }
        // Add stars
        for (let k = 0; k <  i * 2 + 1; k++) {
            // If k is 0 or the last star in the row, add a star, otherwise add a space
            if (k == 0 || k == i * 2) {
                stars += "*";
            } else {
                stars += " ";
            }
        }
        diamond += spaces + stars + "\n";
    }
    // Lower part of the diamond
    for (let i = n - 2; i >= 0; i--) {
        spaces = "";
        stars = "";
        // Add spaces
        for (let j = 0; j < n - i - 1; j++) {
            spaces += " ";
        }
        // Add stars
        for (let k = 0; k < i * 2 + 1; k++) {
            // If k is 0 or the last star in the row, add a star, otherwise add a space
            if (k == 0 || k == i * 2 ) {
                stars += "*";
            } else {
                stars += " ";
            }
        }
        diamond += spaces + stars + "\n";
    }
    return diamond;
}
*/


//! Kısa versiyon;
/*
function drawDiamond(n) {
    let diamond = "";

    // Üst kısım
    for (let i = 0; i < n; i++) {
        let spaces = " ".repeat(n - i - 1);
        let line = "";
        for (let j = 0; j < i * 2 + 1; j++) {
            line += (j === 0 || j === i * 2) ? "*" : " ";
        }
        diamond += spaces + line + "\n";
    }

    // Alt kısım
    for (let i = n - 2; i >= 0; i--) {
        let spaces = " ".repeat(n - i - 1);
        let line = "";
        for (let j = 0; j < i * 2 + 1; j++) {
            line += (j === 0 || j === i * 2) ? "*" : " ";
        }
        diamond += spaces + line + "\n";
    }

    return diamond;
}
*/


//! En Kısa versiyon (yardımcı fonksiyon ile);
function drawLine(i, totalRows) {
    let spaces = " ".repeat(totalRows - i - 1);
    let line = "";
    for (let j = 0; j < i * 2 + 1; j++) {
        line += (j === 0 || j === i * 2) ? "*" : " ";
    }
    return spaces + line + "\n";
}

function drawDiamond(n) {
    let diamond = "";
    for (let i = 0; i < n; i++) diamond += drawLine(i, n);
    for (let i = n - 2; i >= 0; i--) diamond += drawLine(i, n);
    return diamond;
}
