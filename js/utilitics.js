 function getInputElementById(inputId){
    const inputField  = document.getElementById(inputId);
    const inputElementStryng = inputField.value;
    const inputElement = parseFloat(inputElementStryng);
    inputField.value = '';
    return inputElement;
 }

function getTextElementById(textId){
    const textField = document.getElementById(textId);
    const textElementString = textField.innerText;
    const textElement = parseFloat(textElementString);
    textField.innerText = '';
    return textElement;
}

function setElementValueById(elementId,newValue){
     const textElementValue = document.getElementById(elementId);
     textElementValue.innerText = newValue;
    }
