document.querySelector(".keys").addEventListener("click", function (e) {
  addDeleteFunctionality(e.target.textContent);
  if (e.target.textContent !== "AC" && e.target.textContent !== "C") {
    const numberAndOperators = e.target.textContent;
    addFunctionality(numberAndOperators);
  }
});

const inputEl = document.getElementById("input");
let counter = 0;

function addFunctionality(numberAndOperators) {
  const inputValue = (inputEl.value += numberAndOperators);
  if (numberAndOperators === "=") {
    const findOperatorsIndex = inputValue
      .split("")
      .findIndex((sign) => "-*+/".includes(sign));
    const firstValue = inputValue.slice(0, findOperatorsIndex);
    const operators = inputValue.slice(
      findOperatorsIndex,
      findOperatorsIndex + 1
    );
    const lastValue = inputValue.slice(
      findOperatorsIndex + 1,
      inputValue.length - 1
    );
    handleCalculationFunctionality(firstValue, operators, lastValue);
  }
}

function handleCalculationFunctionality(firstValue, operators, lastValue) {
  inputEl.value = "";
  const firstNumber = +firstValue;
  const lastNumber = +lastValue;

  let result = "";

  switch (operators) {
    case "+":
      result = firstNumber + lastNumber;
      break;
    case "-":
      result = firstNumber - lastNumber;
      break;
    case "*":
      result = firstNumber * lastNumber;
      break;
    case "/":
      result = firstNumber / lastNumber;
      break;

    default:
      "Enter Valid Number";
  }

  return (inputEl.value = result);
}

function addDeleteFunctionality(deleteBtn) {
  if (deleteBtn === "C") {
    counter++;
    inputEl.value = inputEl.value.slice(0, inputEl.value.length - counter);
    counter = 0;
  }
  if (deleteBtn === "AC") {
    inputEl.value = "";
  }

  return inputEl.value;
}
