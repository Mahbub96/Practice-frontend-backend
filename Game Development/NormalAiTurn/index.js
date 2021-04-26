// Driver part 
$(document).ready(function(){
    
    $(".btn").click(function(){
      if($(this).text() == ""){
        
        $(this).text(human);
        humanState.push(this.id);

        // checkWin(humanState);
        
        AI_functionalities_Main();

      }
      
      
    });
});


const human = () =>{
    return "X";
}

function checkWin(state){
    // Incomplete project 

}


