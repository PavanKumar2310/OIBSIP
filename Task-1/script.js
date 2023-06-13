function onlyNumbers(event) {
    var charCode = event.which ? event.which : event.keyCode;
  
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
  
    return true;
  }
  
  function brace1(){
    document.getElementById("show").value+='(';
  }
  function brace2(){
    document.getElementById("show").value+=')';
  }
  // Get the display element
  var display = document.getElementById("show");
  
  // Function to append a value to the display
  function read(value) {
    display.value += value;
  }
  display.addEventListener('click',Delete);
  function Del() {
    display.value = display.value.slice(0, -1);
  }
  
  // Function to delete the last character from the display
  
  
  // Function to clear the display
  function Clr() {
    display.value = "";
  }
  
  
  // Function to evaluate the expression and display the result
  function enter() {
  
    var expression = display.value;
  
    try {
      var result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = "Error"}
    }
