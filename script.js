// fetching the element
let display = document.getElementById("display");
let buttons = document.getElementsByClassName("button");
// define element 
let operand1 = 0;
let operant2 = null;
let operator = null;
// checking is operator or not .function return value in terms of true or false
function isoperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (let i = 0; i < buttons.length; i++) {
    // appling click event 
    buttons[i].addEventListener("click", function () {
        var text = buttons[i].textContent;
        // if function return true then execute otherwise skip
        if (isoperator(text)) {
            display.textContent = " ";
            operant2 = 0;
            operator = text;
            return;
        }

        if (text === "=") {
            if (operator === null) {
                display.textContent = operand1;
                console.log('=')
                // return
            }

            else {
                if (operator == '+') {
                    display.textContent = operand1 + operant2;
                    console.log('+')
                }
                if (operator == '-') {
                    display.textContent = operand1 - operant2;
                }
                if (operator == '*') {
                    display.textContent = operand1 * operant2;

                }
                if (operator == '/') {
                    display.textContent = operand1 / operant2;
                }
            }
            operant2 = null;
            operator = null;
            operand1 = parseFloat(display.textContent);
            return;
        }
        if (text == "AC") {
            operand1 = 0;
            operant2 = null;
            operator = null;
            display.textContent = "";
            return;
        }
        if (text == '%') {
            operand1 /= 100;
            operant2 = null;
            operator = null
            display.textContent = operand1;
            return
        }
        if (text === "+/-") {
            if (operant2 == null) {
                operand1 = -1 * operand1;
                display.textContent = operand1;
            }
            else {
                operant2 = -1 * operant2;
                display.textContent = operant2;
            }
            return
        }

        if (operant2 != null) {
            display.textContent = display.textContent + text;
            operant2 = parseFloat(display.innerText);
            console.log(typeof operant2, 'operant2', operant2);
            return
        }

        display.innerText = display.innerText + text;
        operand1 = parseFloat(display.innerText);
        console.log(typeof operand1, 'operand1', operand1);
    });
}
