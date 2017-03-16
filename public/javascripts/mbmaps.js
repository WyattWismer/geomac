$.getJSON("public/javascripts/main_markers.json", function (json) {

    mkdata = json;

});

$(document).ready(function () {
    //Declare variables
    var bounds = [
        [43.25020423714625, -79.93532180786134],
        [43.27486195260225, -79.90146160125734]
    ];

    var out = [];

    var mymap = L.map('map', {
        maxBounds: bounds,
        center: [43.26158, -79.918],
        zoom: 16
    });

    //
    mymap.maxBounds = bounds;

    L.tileLayer('https://api.mapbox.com/styles/v1/le-michael/cj092gx3j002d2ro2bf40f1mi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGUtbWljaGFlbCIsImEiOiJjajA4cG9wY3UwNzlzMnFwZWFmYTgyNG1yIn0.YAmObZ6YoXNa_O5tOJrZcg', {
        maxZoom: 20,
        minZoom: 15
    }).addTo(mymap);

    function onMapClick(e) {
        //console.log(e.latlng.lat);
        //DEBUG LINE RIGHT HERE BOI GET RID OF IT
        console.log([e.latlng.lat, e.latlng.lng]);
    }

    //Declare Map Objects

    if (navigator.geolocation) {
        console.log("Location On");
        navigator.geolocation.getCurrentPosition(function (e) {
            //console.log([e.coords.latitude, e.coords.longitude]);
            var posPlayer = [e.coords.latitude, e.coords.longitude];

            //Create player marker
            var mPlayer = L.circle(posPlayer, {
                radius: 6
            }).addTo(mymap);

            for (var i = 0; i < mkdata.Markers.Names.length; i++) {
                console.log("Draw Circle");
                L.circle(mkdata.Markers.Cords[i], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 6
                }).addTo(mymap).bindPopup(mkdata.Markers.Names[i]);
            }


        }, function (msg) {
            alert("Sorry, no position available.");
        }, {
                
                maximumAge: 30000,
                timeout: 27000,
                enableHighAccuracy: true
            }


        );

    }
    else {
        console.log("Failed to retrive geolocation");
    }


    mymap.on('click', onMapClick);
});
