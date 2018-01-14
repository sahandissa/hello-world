// Shared code needed by the code of all three pages.

// Prefix to use for Local Storage.  You may change this.
var APP_PREFIX = "monash.eng1003.fencingApp";

// Array of saved Region objects.
var savedRegions = [];


// This function displays the given message String as a "toast" message at
// the bottom of the screen.  It will be displayed for 2 second, or if the
// number of milliseconds given by the timeout argument if specified.
function displayMessage(message, timeout)
{
    if (timeout === undefined)
    {
        // Timeout argument not specifed, use default.
        timeout = 2000;
    } 

    if (typeof(message) == 'number')
    {
        // If argument is a number, convert to a string.
        message = message.toString();
    }

    if (typeof(message) != 'string')
    {
        console.log("displayMessage: Argument is not a string.");
        return;
    }

    if (message.length == 0)
    {
        console.log("displayMessage: Given an empty string.");
        return;
    }

    var snackbarContainer = document.getElementById('toast');
    var data = {
        message: message,
        timeout: timeout
    };
    if (snackbarContainer && snackbarContainer.hasOwnProperty("MaterialSnackbar"))
    {
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
}

var map;
var infoWindow ;
var currentPosition;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 0.0, lng: 0.0},
      zoom: 16
    });
}


function region(cornerPositions){
    var closedPathArray = cornerPositions;
    closedPathArray[cornerPositions.length] = cornerPositions[0];
    this.cornerPositions = cornerPositions;
    this.savedTime;
    this.computeArea= function(pathPolygon){
        
        var polygonArea = google.maps.geometry.spherical.computeArea(pathPolygon.getPath());
        };
    this.perimeter;
    
    
}      
          
      