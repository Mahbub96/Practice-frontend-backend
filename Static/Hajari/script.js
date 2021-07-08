var Players = [
	{
		name : "Player 1 : ",
		value : 0
	},
	{
		name : "Player 2 : ",
		value : 0
	},
	{
		name : "Player 3 : ",
		value : 0
	},
	{
		name : "Player 4 : ",
		value : 0
	}
];		
		
var output  =  document.getElementById( "output" );
var iteration = 0;
var f1  = document.getElementById( "f1" );
var f2  = document.getElementById( "f2" );
var f3  = document.getElementById( "f3" );
var f4  = document.getElementById( "f4" );

const submit_btn = document.querySelector('#submit');
const showHistory = document.getElementById("show_history");
const hideHistory = document.getElementById("hide_history");
const historyList = document.querySelector('.history-list');

function isHover(){
	submit_btn.disabled = false;
}


var totalCall = document.getElementById("TotalCall");
var gameOverPoint = document.getElementById("gamePoint");

var F1 = 0,F2 = 0,F3 = 0,F4  = 0;


//To Show All Output
function show(player){
	Sort(player);

	output.innerHTML  = "<mark>"+player[0].name+player[0].value+"<br> "+player[1].name+player[1].value+" <br>"+player[2].name+player[2].value+"<br>"+player[3].name+player[3].value+"</mark>";
	

}




//Validation Checking Function

function check(a,b,c,d){
	if((a+b+c+d) == parseInt(totalCall.value)) return 1;
	else return 0;
}

//Reset function for Reload Windows
function reset(){
	confirm("Are you sure") && location.reload();
	// if(Confirm) ;
}


//Main Function ,Submit button press
function submit(){
	


	

	a = parseInt(f1.value);
	b = parseInt(f2.value);
	c = parseInt(f3.value);
	d = parseInt(f4.value);

	if(check(a,b,c,d) && (parseInt(gameOverPoint.value) > (F1 || F2 || F3 || F4))) {

		F1 = F1 + a;
		F2 = F2 + b;
		F3 = F3 + c;
		F4  = F4 + d;
		
		
		for(let i  = 0;i< 4;i++){
		if(Players[i].name  == "Player 1 : " ) Players[i].value  = F1;
			else if(Players[i].name  == "Player 2 : " ) Players[i].value  = F2;
		else if(Players[i].name  == "Player 3 : " ) Players[i].value  = F3;
			else if(Players[i].name  == "Player 4 : " ) Players[i].value  = F4;
		

			submit_btn.disabled = true;
			document.querySelectorAll(".out")[0].style.display= "none";
			document.querySelectorAll(".out")[1].style.display= "none";

		}
		// for showing history table 
		addElement(Players);
		
		//output Sequence and shows
		show(Players);
		
		totalCall.disabled = true;
		gameOverPoint.disabled = true;
		
	}

	else if(check(a,b,c,d) && (parseInt(gameOverPoint.value) == (F1 || F2 || F3 || F4))){
		show(Players);
		document.getElementById("submit").disabled = true;
	}

	else output.innerHTML = "Wrong Value";
	

}

function Sort(arr){
	arr.sort((a, b) => {
		return a.value - b.value;
	});
}



/**
 * History list
 */


 function addElement(player) {
   // create a new tr element 
   const newTr = document.createElement("tr");
   // create a new div element
   const newTd0 = document.createElement("td");
   const newTd1 = document.createElement("td");
   const newTd2 = document.createElement("td");
   const newTd3 = document.createElement("td");
 
   // and give it some content
   const newContent0 = document.createTextNode(f1.value);
   const newContent1 = document.createTextNode(f2.value);
   const newContent2 = document.createTextNode(f3.value);
   const newContent3 = document.createTextNode(f4.value);
 
   // add the text node to the newly created div
   newTd0.appendChild(newContent0);
   newTd1.appendChild(newContent1);
   newTd2.appendChild(newContent2);
   newTd3.appendChild(newContent3);

   newTr.appendChild(newTd0);
   newTr.appendChild(newTd1);
   newTr.appendChild(newTd2);
   newTr.appendChild(newTd3);
 
   // add the newly created element and its content into the DOM
   const currentDiv = document.getElementById("history-table");
   
   currentDiv.appendChild(newTr);
//    document.body.insertBefore(newDiv, currentDiv);
}



//  history panel 
function show_history(){
	historyList.style.display="block";
	showHistory.style.display="none";
	hideHistory.style.display="inline-block"

}

function hide_history(){
	historyList.style.display="none";
	showHistory.style.display="inline-block";
	hideHistory.style.display="none"
}

