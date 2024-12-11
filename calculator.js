function addToDisplay(value) {
    var display = document.getElementById('display');
    display.value = display.value + value;
}
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}
function calculate() {
    try {
        var display = document.getElementById('display');
        var result = eval(String(display.value));
        display.value = result;
    } 
    catch (error) {   
        document.getElementById('display').value = 'Error';
    }
}

