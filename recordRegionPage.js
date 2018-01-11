// Code for the Record Region page.


function addCorner(){
    //function to set markers at the boundry corners. should update corners array
    console.log("hi")
    navigator.geolocation.getCurrentPosition(successHandler);
    
    function successHandler(position){
        var marker = new google.maps.Marker(position)
    }
    
}