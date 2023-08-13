function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    const resultField = document.getElementById("result");
    const expression = resultField.value;
  
    if (expression) {
      const result = eval(expression);
      resultField.value = result;
    }
  }
  