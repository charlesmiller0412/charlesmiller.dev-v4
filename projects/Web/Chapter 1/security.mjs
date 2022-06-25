function getInfo() {

    var browser = navigator.appName;
    var online = navigator.onLine;
    var platform = navigator.platform;
    var height = screen.height + " pixels";
    var width = screen.width + " pixels";
    var pixels = screen.pixelDepth + " bits per pixel";

    var data = [browser, online, platform, height, width, pixels];

    for (i = 0; i < data.length; i++) { //for statement that will increment by 1 every iteration NTE length of data array
        document.getElementsByClassName("field")[i].innerHTML = data[i]; //get class name field that increments with i and writes data to innerHTML
    }

    //since I dont like the lower case t in true, I fixed it to a capital.
    if (online.value = true){
        document.getElementById("online").innerHTML = "True";
    } else {
        document.getElementById("online").innerHTML = "False";
    }
}

//navigator getCurrentPosition runs mapLocation function if successful, fail if 
//ignored or denied location services, and times out at 10000 seconds
navigator.geolocation.getCurrentPosition(mapLocation, fail, {timeout: 10000, enableHighAccuracy: true});

//create function to show user position on map using geolocation API
function mapLocation (position) {
    //create variables for user data
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;

    //if nothing is returned for altitude, display N/A
    if (altitude === null) {
        altitude = "N/A";
    }

    //This array is for the lattitude and longitude of the desired display location
    //Hard coded to Paris France
    var coordsArray = [latitude, longitude];
    //Creates the map object with the intended coordinates and sets zoom level to 13
    var map = L.map('map').setView(coordsArray, 13);
    //Creates the required WebGL metadata and chains it to the map object
    var gl = L.mapboxGL({
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
        accessToken: 'not-needed',
        style: 'https://api.maptiler.com/maps/streets/style.json?key=qZjWTwtNTmBxDi3ZpTB5'
    }).addTo(map);
    //Creates the marker for the intended coordinates and chains it to the map object 
    var marker = L.marker(coordsArray).addTo(map);

    //display users data
    document.getElementById("userLat").innerHTML = latitude;
    document.getElementById("userLong").innerHTML = longitude;
    document.getElementById("userAlt").innerHTML = altitude;
}

//create funtion for if geolocation request is denied or ignored
function fail() {
    //set map and data display to none and set failMsg to block
    document.getElementById("map").style.display = "none";
    document.getElementById("showLocation").style.display = "none";
    document.getElementById("failMsg").style.display = "block";
    document.getElementById("failMsg").innerHTML = "In order for the map feature to work, please allow access to your location.";
}