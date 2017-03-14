$(document).ready(function () {

    var mymap = L.map('map').setView([41.0, 50.0], 2)

    L.tileLayer('https://api.mapbox.com/styles/v1/le-michael/cj092gx3j002d2ro2bf40f1mi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGUtbWljaGFlbCIsImEiOiJjajA4cG9wY3UwNzlzMnFwZWFmYTgyNG1yIn0.YAmObZ6YoXNa_O5tOJrZcg', {
        maxZoom: 18,
        
    }).addTo(mymap);


});
