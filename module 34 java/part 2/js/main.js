let circle = document.getElementById("circle");
let time = document.getElementById("time");

let start = new Date();

circle.onclick = function() {
    let end = new Date();
    let seconds = (end - start) / 1000;

    time.innerHTML = seconds + " sekonda";
};