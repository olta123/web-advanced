var buttoni = document.getElementById("btn1");


buttoni.onclick = function(){
    alert("You clicked the buttong")
};




var namesOfPeople = ["Deoni", "Olta", "Elda", "Drini", "Donjeta"];

console.log(namesOfPeople);

console.log(namesOfPeople[2]);
console.log(namesOfPeople[4]);

namesOfPeople.push("Dielli");
console.log(namesOfPeople);

//push() e shton nje element ne fund

namesOfPeople.pop();
console.log(namesOfPeople);

// metoda pop() e hek elementin e fundit ne array

namesOfPeople.pop();
console.log(namesOfPeople);

// metoda unshift() e shton nje element ne fillim te array
namesOfPeople.unshift("Drita");
console.log(namesOfPeople);

// metoda shift() e hek nje element ne fillim te array
//namesOfPeople.shift();
//namesOfPeople.shift();
//namesOfPeople.shift();
//console.log(namesOfPeople);

namesOfPeople.splice(0,2,"hello"); //metoda splice() i heq elementet nga pozita 0 deri te 2 dhe e shton nje element te ri "hello" (ne kete rast)
console.log(namesOfPeople);

console.log(Math.random());

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));