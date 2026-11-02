$("li").click(function(){
    alert("You clicked on a list item!");
});

$('#btn').click(function(){
    console.log("Button clicked!");
    $("#h1").text("You clicked the button!");
    $("#h1").append("<p>Button was clicked!</p>")
})

$("#myDiv").click(function(){
    $(this).addClass("clicked");
})

$("#btn2").click(function(){
    $(".hidden").hide();
})

$("#btn2").click(function(){
    $(".hidden").show();
    $("#square").show();
})