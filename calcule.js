let container = document.getElementById("container");
let btns = document.getElementsByTagName("button");
let input = document.getElementById("ecran");
//------ fun number 1 -------------
function modeBlack() {	
	container.style.backgroundColor = "black" ;
	for (var i = btns.length - 1; i >= 0; i--) {
		btns[i].style.backgroundColor = "#83FA44" ;
	}
	input.style.backgroundColor = "#F2F5F5" ; 
}
//------fin fun number1-----------

// fun 2--------------------
function modeNormal() {
	container.style.backgroundColor = "white" ;
	for (var i = btns.length - 1; i >= 0; i--) {
		btns[i].style.backgroundColor = "#F2F5F5" ;
	}
	input.style.backgroundColor = "#F1F8F7" ; 
}


function ajoute(e) {
	//ajoute des valeurs au inpt1
	let nmbr = e.textContent ;
	input.value += nmbr ; 
}

function DropNombres(){
	input.value ="";
}

//------ methode evel pour calculer -----

function calcule(){
	var result = eval(input.value);
	input.value = result ;
}



















