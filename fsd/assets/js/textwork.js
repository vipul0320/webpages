function showData() {
    let textInput = document.getElementById('textInput');
    let text = textInput.value;
  
    let output = document.getElementById('output');
    output.textContent = text;
  }
  
  function convertToUppercase() {
    let textInput = document.getElementById('textInput');
    let text = textInput.value;
  
    let uppercaseText = text.toUpperCase();
  
    let output = document.getElementById('output');
    output.textContent = uppercaseText;
  }

    function convertToLowercase() {
        let textInput = document.getElementById('textInput');
        let text = textInput.value;
      
        let LowerCasecaseText = text.toLowerCase();
      
        let output = document.getElementById('output');
        output.textContent = LowerCasecaseText;
  }
  