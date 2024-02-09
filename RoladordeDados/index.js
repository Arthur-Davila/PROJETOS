//DICE ROLLER

function rollDice(){
    const numOfDice = document.getElementById("numOfDices").value;
    const diceResult = document.getElementById("resultado");
    const diceImagem = document.getElementById("imagensDados");
    const soma = document.getElementById("Soma");
    const values = [];
    const image = [];
    let value;
    let sum = 0;
    
    for(let i = 0;i<numOfDice;i++){
        value = Math.floor(Math.random()*6)+1;
        
        sum =sum+ value;
        values.push(value);
        console.log(values);

       
        image.push(`<img src="imagens/${value}.png" alt="Dice ${value}">`);
    
    }  
    diceResult.textContent = `dados: ${values.join(`, `)}`;
    soma.textContent = "Soma: "+ sum;
    diceImagem.innerHTML = image.join(" ");
} 