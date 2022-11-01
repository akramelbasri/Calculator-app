// gets elements
let container = document.getElementById("container");
let btns = document.getElementsByTagName("button");
let input = document.getElementById("ecran");
let head = document.getElementById("header");
let foot = document.getElementById("footer");

//------ fun number 1 -------------1b1919
function modeBlack() {	
	head.style.color = "white" ;
	footer.style.color = "white" ;	
	head.style.backgroundColor = "black" ;
	footer.style.backgroundColor = "black" ;
	container.style.backgroundColor = "black" ;
	for (var i = btns.length - 1; i >= 0; i--) {
		btns[i].style.backgroundColor = "#83FA44" ;
	}
	input.style.backgroundColor = "#F2F5F5" ; 
}
// fun 2--------------------
function modeNormal() {
	head.style.color = "black" ;
	footer.style.color = "black" ;	
	head.style.backgroundColor = "#D4FFFF" ;
	footer.style.backgroundColor = "#D4FFFF" ;
	container.style.backgroundColor = "white" ;
	for (var i = btns.length - 1; i >= 0; i--) {
		btns[i].style.backgroundColor = "#F2F5F5" ;
	}
	input.style.backgroundColor = "#F1F8F7" ; 
}
function ajoute(e) {
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