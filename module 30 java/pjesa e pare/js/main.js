//var nxenesit = ["Olta, "Deoni", "Elda", "Drini", "Donjeta"];

//console.log(nxenesit);

//console.log(nxenesit[2]);

//nxenesit.push("Dielli");


var x = 2;


if(x>2){
    console.log("x eshte me i madh se 2");
}else{
    console.log("x eshte me i vogel se 2");
}

var elda = document.getElementById("input_id");
var buttoni = document.getElementById("btn_id");

var text = document.getElementById("text_id");

//buttoni.onclick = function(){
//    text.innerHTML = elda.ariaValueMax;
//}

var input1 = document.querySelector("#input1_id");
var input2 = document.querySelector("#input2_id");
var buttoni2 = document.querySelector("#btn2_id");
var text2 = document.querySelector("#answer");

buttoni2.addEventListener("click", function(){
    text2.innerHTML=parseInt(input1.value) + parseInt(input1.value);
})
