//Some styling with jQuery for module 6
$("#active").css({"background-color" : "#00B38A", "color" : "#FFF", "border-radius" : "10px 10px 0 0"});

$(document).ready(function() {
    $("#bannerLogo").fadeIn("slow");
})
// create a function to get images from the flickr API using json
function getFlickrImages(json) { //getFlickrImages function with reference to json object
    for (i = 0; i < 8; i++) { //while i < 4 iterate through json objects items
        var item = json.items[i];
        var imgHTML = "<img src='" + item.media.m + "'/>"; //pull media from items and insert in the image src
        document.getElementById("imageRows").innerHTML += imgHTML; //add images to innerHTML
    }
}

//create XHR to search hockey teams
function getHockey() {

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var responseObject = JSON.parse(this.responseText);
            console.log(this.responseText);

            //for chances of having multiple responses, create for statement to gather data
            for (i = 0; i < responseObject.response.length; i++) {
                var name = responseObject.response[i].name;
                var logo = '<img src="' + responseObject.response[i].logo + '"/>';
                var arenaName = responseObject.response[i].arena.name;
                var arenaLocation = responseObject.response[i].arena.location;
            }
            //Fill page with data gathered in for loop
            document.getElementById("name").innerHTML = name;
            document.getElementById("name").style.display = "block";
            document.getElementById("logo").innerHTML = logo;
            document.getElementById("logo").style.display = "block";
            document.getElementById("arenaName").innerHTML = arenaName;
            document.getElementById("arenaName").style.display = "block";
            //if no arena info, report there's no team info availble (usually due to team folding)
            if (arenaName === null) {
                document.getElementById("arenaName").innerHTML = "Team information is no longer available.";
            }
            document.getElementById("arenaLocation").innerHTML = arenaLocation;
            document.getElementById("arenaLocation").style.display = "block";
        }
    });
    
    //create variable for search term
    var team = document.getElementById("searchTeam").value;
    
    xhr.open("GET", "https://api-hockey.p.rapidapi.com/teams/?search=" + team);
    xhr.setRequestHeader("x-rapidapi-key", "9ae9661098msha4eabec30e8b40fp107fe9jsnbc59cf2f0c45");
    xhr.setRequestHeader("x-rapidapi-host", "api-hockey.p.rapidapi.com");
    
    xhr.send(data);
}

//create a function to show parts based on user slection

function showParts() {
    var parts = document.getElementById("parts").value;
    var intake = document.getElementById("intake");
    var dp = document.getElementById("dp");

    if (parts === "all") { //if parts value = all show all parts
        document.getElementById("intake").style.display = "inline-block";
        document.getElementById("dp").style.display = "inline-block";
    } else if (parts === "intake") { //if parts value = intake show only intakes
        document.getElementById("intake").style.display = "inline-block";
        document.getElementById("dp").style.display = "none";
    } else { //if neither all or intake is selected, show downpipes
        document.getElementById("intake").style.display = "none";
        document.getElementById("dp").style.display = "inline-block";
    }
    //return false in html to stop the browser from refreshing the options to default
}

var finalPriceIntake;
var finalPriceDP;
var totalCost;

//create a function to calculate the total price of the item based on user input
function calculateIntake() { //create the function to calculate the total cost of the intake
    var cost = document.getElementById("quantityIntake").value * 349.99; //retreive the value from quantity of the intake and multiply by base price
    var tax = cost * .08; //calculate tax based on the cost * .08
    var price = cost + tax; //calculate price based on sum of cost and tax
    finalPriceIntake = price.toFixed(2); //round the final price to the nearest 2 decimal places
    document.getElementById("finalPriceIntake").innerHTML = "$" + finalPriceIntake; //set the id of finalPriceIntake to the final price plus $
}


//create a function to calculate the total price of the item based on user input
function calculateDP() { //create the function to calculate the total cost of the downpipe
    var cost = document.getElementById("quantityDP").value * 799.99; //retreive the value from quantity of the dp and multiply by base price
    var tax = cost * .08; //calculate tax based on the cost * .08
    var price = cost + tax; //calculate price based on sum of cost and tax
    finalPriceDP = price.toFixed(2); //round the final price to the nearest 2 decimal places
    document.getElementById("finalPriceDP").innerHTML = "$" + finalPriceDP; //set the id of finalPriceDP to the final price plus $
}


// CONTACT FORM UPDATED WITH jQuery FOR MODULE 6

function validateForm(){

    // NAME VALIDATION
    var formErrors = false;

    event.preventDefault();
    try {
        var name = $("#name").val();
        // var name = document.getElementById("name").value; //get the value of #name
        var regex = /^[a-zA-Z ]+$/;

        if (name.length === 0 || regex.test(name) === false) { //if name is blank or is not only lower/uppercase letters throw message, else don't display errorName
            throw "Please enter your name.";
        } else {
            $("#errorName").hide();
            // document.getElementById("errorName").style.display = "none"; //remove error message since error was not found or was fixed
        }
    }
    catch (errMsgName) {
        console.log(errMsgName); //write to console the error
        formErrors = true; //set formError to true since error was found
        $("#errorName").show();
        // document.getElementById("errorName").style.display = "block"; //display error message
    }

    //EMAIL VALIDATION
    try {
        var email = $("#email").val();
        // var email = document.getElementById("email").value;

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) { //if @ or . is not found within the emails value
            throw "Please enter a valid email address."
        } else {
            $("#errorEmail").hide();
            // document.getElementById("errorEmail").style.display = "none"; //if @ is found then keep the display as none
        }
    }
    catch (errMsgEmail) {
        console.log(errMsgEmail);
        formErrors = true;
        $("#errorEmail").show();
        // document.getElementById("errorEmail").style.display = "block"; //show error message
    }

    // selection validation
    try {
        var reason = $("#reason").val();
        // var reason = document.getElementById("reason").value;

        if (reason === "Select an option") { //if the default text remains selected then throw
            throw "Please select an option from the dropdown menu"
        } else {
            $("#errorReason").hide();
            // document.getElementById("errorReason").style.display = "none"; //if new selection is made then error message remains hidden
        }
    }
    catch (errMsgReason) {
        console.log(errMsgReason);
        formErrors = true;
        $("#errorReason").show();
        // document.getElementById("errorReason").style.display = "inline-block"; //if default selection remains, show error message
    }
    
    // MESSAGE VALIDATION
    try {
        var message = $("#message").val();
        // var message = document.getElementById("message").value;

        if (message === "") { //check if textarea includes text
            throw "Please include a message.";
        } else {
            $("#errorMsg").hide();
            // document.getElementById("errorMsg").style.display = "none"; //if text found, keep error message hidden
        }
    }

    catch (errMsgMessage) {
        console.log(errMsgMessage);
        formErrors = true;
        $("#errorMsg").show();
        // document.getElementById("errorMsg").style.display = "block";//if no text found, show error message
    }


    // IF NO ERRORS ALERT THANK YOU
    finally { //if at end formErrors = true, write to console to fix error
        if (formErrors) {
            console.log("Please fix all errors.")
       } else { //alert confirmation and write to console there were no errors
        window.alert("Thank you! You can expect a response within 2 business days.");
        console.log("No errors.");
        }
    }
}

//Module 6
$("#submit").click(validateForm);
// function createEventListeners() { //event listener for submit button
//     var submitBtn = document.getElementById("submit");

//     if (submitBtn.addEventListener) {
//         submitBtn.addEventListener("click", validateForm, false);
//     } else if (submitBtn.attachEvent) {
//         submitBtn.attachEvent("onclick", validateForm);
//     }
// }


if (window.addEventListener) { //compatible event listeners
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}