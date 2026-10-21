//function pritNames(){
//    document.write("Elda");
//    document.write("<br>")
//    setTimeout(function() {document.write("olta");},3000);

//    document.write("Drini")
//}

//pritNames()


var colors = ['red', 'green', 'blue', 'purple'];

function changebgColor() {
    document.querySelector('body').style.background = 
    colors[Math.floor(Math.random()*colors.length)]
}

var names = ["Olta", "Elda", "Deoni", "Drini"]

function changeNames() {
    document.querySelector('p').innerHTML = 
    names[Math.floor(Math.random()*names.length)]
}
setInterval(changebgColor, 1000)
setInterval(changeNames, 1000)


