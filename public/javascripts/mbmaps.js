$(document).ready(function () {
    //Declare variables

    var bounds = [
        [43.25020423714625, -79.93532180786134],
        [43.27486195260225, -79.90146160125734]
    ];

    var out = [];
    var mymap = L.map('map',{
        maxBounds: bounds,
    }).setView([43.26158, -79.918], 16);

    //
    mymap.maxBounds = bounds;

    L.tileLayer('https://api.mapbox.com/styles/v1/le-michael/cj092gx3j002d2ro2bf40f1mi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGUtbWljaGFlbCIsImEiOiJjajA4cG9wY3UwNzlzMnFwZWFmYTgyNG1yIn0.YAmObZ6YoXNa_O5tOJrZcg', {
        maxZoom: 20,
        minZoom:15
    }).addTo(mymap);

    function onMapClick(e) {
        //console.log(e.latlng.lat);
        console.log([e.latlng.lat, e.latlng.lng]);
    }

    //Declare Map Objects
    var popup = L.popup()
    .setLatLng([43.26158, -79.918])
    .setContent('Welcome to geohack')
    .openOn(mymap);


    mymap.on('click', onMapClick);
});
