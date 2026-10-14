//var ushqimet = ["mish", "buke", "kos", "vaj", "sheqer"]

//console.log(ushqimet[0])

// for (i in ushqimet) {
// console.log(ushqimet[1])};
//

//for(let i=0; i<5;i++){
//    console.log(ushqimet[i]);
//}

var input = document.getElementById("input_id");
var buttoni = document.getElementById("btn_id");
var teksti = document.getElementById("teksti_id");

buttoni.onclick = function(){
    teksti.innerHTML = input.value;
}

//var teksti2 = "The best school in the world is DigitlSchool";
//var result = teksti2.search("Digital");
//document.getElementById("result1").innerHTML = result;

//metoda search() kthen vendin se ku ka gjet keywordin "Digital" ne stringun teksti2.

//var teksti2 = "The best school in the world is DigitlSchool";
//var result = teksti2.search(/Digital/);
//document.getElementById("result2").innerHTML = result;


//var teksti2 = "The best school in the world is DigitlSchool";
//var result = teksti2.search(/Digital/, "Another School");
//document.getElementById("result3").innerHTML = teksti2.replace(/Digital/,"Another School");

//var teksti3 = "abcdef"
//var regex = new RegExp('abc');

//document.getElementById("result4").innerHTML = regex.test(teksti3);


var teksti2 = "My school is the best school in the world";
var regex = /school/g;
document.getElementById("result5").innerHTML = teksti2.match(regex);


var teksti6 = "My school is the best school in the world";
var regex6 = /i/g;
document.getElementById("result6").innerHTML = teksti2.match(regex6);

var teksti7 = "My school is the best school in the world";
var regex7 = /[abc]/g;
document.getElementById("result7").innerHTML = teksti7.match(regex7);

var teksti8 = "My school is the best school in the world";
var regex8 = /0-9/g;
document.getElementById("result8").innerHTML = teksti6.match(regex8);


var regex9 = /(top|best|school)/g;
document.getElementById("result89").innerHTML = teksti6.match(regex9);