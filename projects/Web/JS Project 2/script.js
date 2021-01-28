// Charles Miller
// GIT 418
// Final Project - Javascript Tutorial
// Fall B 2020  

//when the document is ready, perform the function containing the page styling
$(document).ready(function() {

    //highlight.js changes
    $(".javascript, .css, .html").css({"background-color" : "#2D2D2D", "color" : "#F2F2F2", "font-size" : "1.2em"});
    $(".hljs-keyword, .hljs-string, .hljs-number").css("color", "#C5D961");
    $(".hljs-attribute").css("color", "#00BCFB");
    $(".hljs-selector-id").css("color", "#22FC00");
    $(".hljs-tag").css("color", "#BB78D5")
    $("pre").css("white-space", "normal");
    $(".indent").css("margin-left", "20px");
    $(".doubleIndent").css("margin-left", "40px");
    $("code").css("padding", "20px 50px 20px 20px");
    $(".hlY").css({"border" : "2px dashed yellow", "margin-right" : "10px", "padding" : "5px"});
    $(".hlR").css({"border" : "2px dashed red", "margin-right" : "10px", "padding" : "5px"});
    $(".hlB").css({"border" : "2px dashed blue", "margin-right" : "10px", "padding" : "5px"});

    //Global
    $("h1").css("margin", "0 0 30px 0");
    $("h2").css({"font-family" : "acier-bat-gris,sans-serif", "font-weight" : "400", "font-style" : "normal"});
    $("body").css({"background-color" : "#2D2D2D", "font-family" : "conglomerate, serif", "font-weight" : "400", "font-style" : "normal"});
    $(".wrapper").css({"max-width" : "1200px", "margin" : "0 auto", "height" : "100vh", "background-color" : "#F2F2F2"});
    
    //Header
    $("header").css({"text-align" : "center", "padding" : "1.5em 30px 0 30px", "background-image" : "linear-gradient(#4CA6DE 80%, #F2F2F2)", "font-family" : "acier-bat-gris,sans-serif", "font-weight" : "400", "font-style" : "normal"});
    $("header h1").css("font-size", "5em");
    $("#headerBottom").css({"display" : "flex", "justify-content" : "space-between"});

    //Main
    $("main").css({"padding" : "20px 30px 100px 30px", "background-color" : "#F2F2F2"});
    $("#intro").css({"display" : "flex", "justify-content" : "space-between", "margin" : "50px 0 0 0"});
    $("#info").css({"display" : "inline-block", "width" : "55%"});

    //JS Example
    $("#example").css({"width" : "40%", "background-color" : "#A5C9E0", "padding" : "10px", "margin" : "100px 10px 0 50px", "border-radius" : "20px", "height" : "40%"});
    $("#example h2").css("margin", "10px");
    $("#css").css({"text-align" : "center", "color" : "red", "margin" : "20px 0"});
    $("#jQuery").css({"text-align" : "center", "margin" : "20px 0", "color" : "red"});
    $("input").css({"margin-top" : "10px", "width" : "60px"});
    $("#exampleJQ").css({"margin" : "50px 0", "font-size" : "1.2em"});

    //Toggle Example
    $("#menu").css({"width" : "302px", "height" : "50px", "background-color" : "#4C86DE", "color" : "#FFF", "margin" : "0 auto"});
    $("#nav").css({"padding" : "0", "margin" : "0","display" : "none", "background-color" : "#A5C9E0", "width" : "300px", "text-align" : "center"});
    $("#nav li").css({"list-style-type" : "none", "border" : "1px solid #000"});
    $("#finalSteps").css("margin", "20px 0");

    // Footer
    $("footer").css({"display" : "flex", "justify-content" : "space-between", "padding" : "20px 30px 0 30px", "background-image" : "linear-gradient(#F2F2F2, #4CA6DE 80%"})

    // All selector
    $("#").css("margin", "0");

}); // end styling

//create function to make text disappear and reappear on click
$("#invisible").click(function() {

    if ( $("#invisible").val() === "Invisible") { //if the value of the ID invisible is Invisible, then show() and make value Visible
        $("#jQuery").show();
        $("#invisible").val("Visible");

    } else { //else hide() and make value Invisible
        $("#jQuery").hide();
        $("#invisible").val("Invisible");
    };

});

//create function to change text color on click
$("#color").click(function () {

    if ($("#color").val() === "Red") { // if value of color equals Red, then change color to blue and value to Blue
        $("#jQuery").css("color", "blue");
        $("#color").val("Blue");

    } else { // else change color to red and value to Red
        $("#jQuery").css("color", "red");
        $("#color").val("Red");
    };

});

//create function to show and hide a menu on click with slide animation
$("#menu").click(function() {

    if ($("#menu").val() === "hidden") { // if the value of menu is hidden, make nav slidDown and change value to shown
        $("#nav").slideDown("fast");
        $("#menu").val("shown");

    } else { //else make nav slideUp and change value to hidden
        $("#nav").slideUp();
        $("#menu").val("hidden");
    };

});