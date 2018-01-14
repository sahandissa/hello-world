// Code for the Record Region page.
var cornerPositions=[];


function addCorner(){
    //get position
    cornerPositions.push(currentPosition);
    showPolygon(cornerPositions);
    //add to corners array
    //maybe add a marker
}

function clearPositions(){
    cornerPositions = [];
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            currentPosition = pos;
            infoWindow = new google.maps.InfoWindow
            infoWindow.setPosition(pos);
            infoWindow.setContent("Latitude: "+pos.lat+"<br>Longitude: "+pos.lng+"<br>Accuracy: "+position.coords.accuracy);
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function showPolygon(cornerPositions)
        {
        
            var polygonPath = cornerPositions;
            var pathPolygon = new google.maps.Polygon({
                  paths: polygonPath,
                  strokeColor: '#2E86C1',
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: '#AED6F1',
                  fillOpacity: 0.35
                });
            if (polygonPath.length>2){
                
                var polygonArea = google.maps.geometry.spherical.computeArea(pathPolygon.getPath());
                console.log(pathPolygon.getPath())
                console.log(polygonArea);
                
                var perimeter=0;
                var arrayLength = cornerPositions.length;
                var endIndex = arrayLength - 1;
                var lat1,lat2,lng1,lng2,point1,point2;
                for(var i=1;i<arrayLength;i++){
                    var j= i-1;
                     
                    lat1 = cornerPositions[j].lat;
                    lng1 = cornerPositions[j].lng;
                    lat2 = cornerPositions[i].lat;
                    lng2 = cornerPositions[i].lng;
                    
                    point1 = new google.maps.LatLng(lat1,lng1);
                    point2 = new google.maps.LatLng(lat2,lng2);
                    perimeter += google.maps.geometry.spherical.computeDistanceBetween(point1,point2)
                }
                
                lat1 = cornerPositions[endIndex].lat;
                lng1 = cornerPositions[endIndex].lng;
                lat2 = cornerPositions[0].lat;
                lng2 = cornerPositions[0].lng;
                
                point1 = new google.maps.LatLng(lat1,lng1);
                point2 = new google.maps.LatLng(lat2,lng2);
                perimeter += google.maps.geometry.spherical.computeDistanceBetween(point1,point2)
                console.log(perimeter)
            }
            
            pathPolygon.setMap(map);
            
        }