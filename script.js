document.addEventListener("DOMContentLoaded", function() {
    const principalInput = document.getElementById("principal");
    const interestRateInput = document.getElementById("interestRate");
    const yearsInput = document.getElementById("years");
    const monthlyAdditionInput = document.getElementById("monthlyAddition");
    const calculateButton = document.getElementById("calculateButton");
    const resultElement = document.getElementById("resulte");

    calculateButton.addEventListener("click", function() {
      const principal = parseFloat(principalInput.value);
      const interestRate = parseFloat(interestRateInput.value);
      const years = parseFloat(yearsInput.value);
      const monthlyAddition = parseFloat(monthlyAdditionInput.value);

      let amount = principal;
      let totalInterest = 0;

      for (let i = 0; i < years; i++) {
        for (let j = 0; j < 12; j++) {
          amount += monthlyAddition;
          const monthlyInterest = amount * (interestRate / 100) / 12;
          amount += monthlyInterest;
          totalInterest += monthlyInterest;
        }
      }

      resultElement.textContent = `Montante: R$ ${amount.toFixed(2)} | Juros Total: R$ ${totalInterest.toFixed(2)}`;
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const showCalculatorButton = document.getElementById("showCalculatorButton");
    const calculatorContainer = document.getElementById("calculatorContainer");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const addButton = document.getElementById("addButton");
    const subtractButton = document.getElementById("subtractButton");
    const multiplyButton = document.getElementById("multiplyButton");
    const divideButton = document.getElementById("divideButton");
    const resultElement = document.getElementById("result");

    showCalculatorButton.addEventListener("click", function() {
      calculatorContainer.classList.add("visible");
    });

    addButton.addEventListener("click", function() {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const result = num1 + num2;
      resultElement.textContent = `Resultado: ${result}`;
    });

    subtractButton.addEventListener("click", function() {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const result = num1 - num2;
      resultElement.textContent = `Resultado: ${result}`;
    });

    multiplyButton.addEventListener("click", function() {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const result = num1 * num2;
      resultElement.textContent = `Resultado: ${result}`;
    });

    divideButton.addEventListener("click", function() {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const result = num1 / num2;
      resultElement.textContent = `Resultado: ${result}`;
    });
  });