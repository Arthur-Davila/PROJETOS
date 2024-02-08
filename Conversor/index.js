//PROGRAMA DE CONVERSÃO DE TEMPERATURA
const textBox = document.getElementById("textBox");
const toFahreheit = document.getElementById("toF");
const toCelsius = document.getElementById("toC");
const resultado = document.getElementById("resultado");

let temp;
function convert(){
    if(toFahreheit.checked){
        temp = Number(textBox.value);
        temp = (temp*9/5)+32;
        resultado.textContent = temp.toFixed(1)+"°F";
    }
    else if(toCelsius.checked){
       
        temp = Number(textBox.value);
        temp = (temp-32)*5/9;
        resultado.textContent = temp.toFixed(1)+"°C";
    }
    else{
       resultado.textContent = "Selecione alguma unidade"; 

    }

}