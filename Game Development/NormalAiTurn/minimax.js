let allState = [0,0,0,0,0,0,0,0,0];
let aiState = [];
let humanState = [];

const AI_functionalities_Main = () =>{
    singlePrint();
}
const singlePrint = () =>{
    let current = getRandomTurn();
    let position = document.getElementById(current);
    let i = 0;

    while(position.innerText != ""){
        if(i++ > 8) break;
        current = getRandomTurn();
        position = document.getElementById(current);
    }

    
    if(position.innerText == "") {
        
        position.innerText = "0";
        aiState.push(current);
        console.log(aiState);

        console.log(aiState[aiState.length - 1])
    }
}
/**
 * 
 * @returns randomTurnOfAI
 */
const getRandomTurn = () =>{
    return Math.round(Math.random() * 8).toString();
    
}

const iswin = (board) => {
    // incomplete function 
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            
        }
    }
}