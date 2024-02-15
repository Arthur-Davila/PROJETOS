const x = false;
const winner = [];

function win(id,item){
     winner[`${item}`] = id.value;
     if(winner['1'] === winner['2']===winner['3']){

     }
     else if((winner['4'] === winner['5']===winner['6'])){

     }
    else if((winner['7'] === winner['8']===winner['9'])){

    }
    else if((winner['1'] === winner['4']===winner['7'])){

    }
    else if((winner['2'] === winner['5']===winner['8'])){

    }
    else if((winner['6'] === winner['3']===winner['9'])){

    }
    else if((winner['1'] === winner['5']===winner['9'])){

    }
    else if((winner['7'] === winner['5']===winner['3'])){
        
    }

}


function colocar(item){
           let id = document.getElementById(item);
    
         if(id.value === undefined){
           if(x === false){
            id.textContent ='X';
            id.style.color = 'red';
            x = true;
            id.value = 'X';
            this.win(id,item);
           }
           else {
            id.textContent = 'O';
            id.style.color = 'Blue';
            x=false;
            id.value = 'O';
            this.win(id,item);
        }
    }

  }