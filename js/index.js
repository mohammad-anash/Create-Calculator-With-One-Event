const buttons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".oper");
const inputEl = document.getElementById("input");
const answerProcess = document.querySelector(".getAnswer");

let counting = "12345678910";
let counter = 0;
function addFunctionalityOnButtonAndInputs(text) {
  const inputValue = (inputEl.value += text);
  const index = inputValue.split("").findIndex((sign) => "/-+*".includes(sign));
  if (text === "=") {
    const firstNumber = inputValue.slice(0, index);
    const Operator = inputValue.slice(index, index + 1);
    const lastNumber = inputValue.slice(index + 1, inputValue.length - 1);
    handleCalculateFunctionality(firstNumber, Operator, lastNumber);
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const textValue = e.target.textContent;
    addFunctionalityOnButtonAndInputs(textValue);
  });
});

function handleCalculateFunctionality(firstNumber, operator, lastNumber) {
  inputEl.value = "";
  let firstInNumber = +firstNumber;
  let lastInNumber = +lastNumber;

  let result = "";

  switch (operator) {
    case "/":
      result = firstInNumber / lastInNumber;
      break;
    case "+":
      result = firstInNumber + lastInNumber;
      break;
    case "-":
      result = firstInNumber - lastInNumber;
      break;
    case "*":
      result = firstInNumber * lastInNumber;
      break;

    default:
      "enter valid number";
  }

  inputEl.value = result;
}

let newString = "";
function addDeleteFunctionality(btnText) {
  if (btnText.textContent === "C") {
    counter++;
    newString = inputEl.value.slice(0, input.value.length - counter);
    counter = 0;
    inputEl.value = newString;
  } else if (btnText.textContent === "AC") {
    inputEl.value = "";
  }
}

document.querySelectorAll(".delete").forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", function (e) {
    const getTextContent = e.target;
    addDeleteFunctionality(getTextContent);
  });
});
