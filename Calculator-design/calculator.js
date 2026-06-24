const DAY = document.querySelector('.day');

const NIGHT = document.querySelector('.night');

const Root = document.querySelector('#root');

const DISPLAY = document.querySelector('#displaycontent');

DAY.addEventListener('click', () => {
    Root.classList.remove('dark-mode');
    DAY.style.backgroundColor = "orange";
    NIGHT.style.backgroundColor = "";
});

NIGHT.addEventListener('click', () => {
    Root.classList.add('dark-mode');
    DAY.style.backgroundColor = "black";
    NIGHT.style.backgroundColor = "cyan";
});

const numberButtons = document.querySelectorAll('.number');

const addBtn = document.querySelector('.add-btn');
const subBtn = document.querySelector('.sub-btn');
const mulBtn = document.querySelector('.mul-btn');
const divBtn = document.querySelector('.div-btn');
const modBtn = document.querySelector('.mod-btn');

const equalBtn = document.querySelector('#Equal');
const clearBtn = document.querySelector('#All-clear');

const backspaceBtn = document.querySelector('.back-btn');
const signBtn = document.querySelector('.sign-btn');
const decimalBtn = document.querySelector('.decimal-btn');

let num1 = "";
let num2 = "";
let operator = "";

DISPLAY.innerText = "0";

// Number Buttons
numberButtons.forEach((button) => {

    button.addEventListener('click', () => {

        if (operator === "") {

            num1 += button.innerText;
            DISPLAY.innerText = num1;

        } else {

            num2 += button.innerText;
            DISPLAY.innerText = `${num1} ${operator} ${num2}`;

        }

    });

});

// Operators
addBtn.addEventListener('click', () => {
    if (num1 !== "") {
        operator = "+";
        DISPLAY.innerText = `${num1} +`;
    }
});

subBtn.addEventListener('click', () => {
    if (num1 !== "") {
        operator = "-";
        DISPLAY.innerText = `${num1} -`;
    }
});

mulBtn.addEventListener('click', () => {
    if (num1 !== "") {
        operator = "*";
        DISPLAY.innerText = `${num1} *`;
    }
});

divBtn.addEventListener('click', () => {
    if (num1 !== "") {
        operator = "/";
        DISPLAY.innerText = `${num1} /`;
    }
});

modBtn.addEventListener('click', () => {
    if (num1 !== "") {
        operator = "%";
        DISPLAY.innerText = `${num1} %`;
    }
});

// Decimal
decimalBtn.addEventListener('click', () => {

    if (operator === "") {

        if (!num1.includes(".")) {

            num1 = num1 === "" ? "0." : num1 + ".";
            DISPLAY.innerText = num1;

        }

    } else {

        if (!num2.includes(".")) {

            num2 = num2 === "" ? "0." : num2 + ".";
            DISPLAY.innerText = `${num1} ${operator} ${num2}`;

        }

    }

});

// Plus / Minus
signBtn.addEventListener('click', () => {

    if (operator === "") {

        if (num1 !== "") {

            num1 = (Number(num1) * -1).toString();
            DISPLAY.innerText = num1;

        }

    } else {

        if (num2 !== "") {

            num2 = (Number(num2) * -1).toString();
            DISPLAY.innerText = `${num1} ${operator} ${num2}`;

        }

    }

});

// Backspace
backspaceBtn.addEventListener('click', () => {

    if (operator === "") {

        num1 = num1.slice(0, -1);

        DISPLAY.innerText = num1 || "0";

    } else {

        num2 = num2.slice(0, -1);

        if (num2 === "") {
            DISPLAY.innerText = `${num1} ${operator}`;
        } else {
            DISPLAY.innerText = `${num1} ${operator} ${num2}`;
        }

    }

});

// Equal
equalBtn.addEventListener('click', () => {

    if (num1 === "" || num2 === "" || operator === "") return;

    let result;

    if (operator === "+") {
        result = Number(num1) + Number(num2);
    }
    else if (operator === "-") {
        result = Number(num1) - Number(num2);
    }
    else if (operator === "*") {
        result = Number(num1) * Number(num2);
    }
    else if (operator === "/") {

        if (Number(num2) === 0) {
            DISPLAY.innerText = "Error";
            return;
        }

        result = Number(num1) / Number(num2);
    }
    else if (operator === "%") {
        result = Number(num1) % Number(num2);
    }

    DISPLAY.innerText = result;

    num1 = result.toString();
    num2 = "";
    operator = "";

});

// AC
clearBtn.addEventListener('click', () => {

    num1 = "";
    num2 = "";
    operator = "";

    DISPLAY.innerText = "0";

});
