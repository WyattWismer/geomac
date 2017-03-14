window.onload = function() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(updateLocation);
    }
    else{s
        alert("Geolocation could not be loaded");
    }
    
};

function updateLocation(position){
    initMap(position.coords.latitude,position.coords.longitude);
};

function initMap(lati,longi) {
    var uluru = {lat: lati, lng: longi};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

