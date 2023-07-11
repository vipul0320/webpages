function performAddition() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 + num2;
    document.getElementById('result').textContent = "Addition is: " + result;
  }

  function performSubtraction() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('result').textContent = "Subtraction is: " + result;
  }

  function performMultiplication() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('result').textContent = "Multiplication is: " + result;
  }

  function performDivision() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 / num2;
    document.getElementById('result').textContent = "Division is: " + result;
  }

  document.getElementById('modeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
  });