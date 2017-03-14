$(document).ready(function () {
    //Declare variables

    var bounds = [
        [43.25686186687375, -79.9254083633423],
        [43.2683312867571, -79.91086006164551]
    ];

    var out = [];
    var mymap = L.map('map',{
        maxBounds: bounds
    }).setView([43.26158, -79.918], 16);

    //
    mymap.maxBounds = bounds;

    L.tileLayer('https://api.mapbox.com/styles/v1/le-michael/cj092gx3j002d2ro2bf40f1mi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGUtbWljaGFlbCIsImEiOiJjajA4cG9wY3UwNzlzMnFwZWFmYTgyNG1yIn0.YAmObZ6YoXNa_O5tOJrZcg', {
        maxZoom: 20,

    }).addTo(mymap);

    function onMapClick(e) {
        //console.log(e.latlng.lat);
        console.log([e.latlng.lat, e.latlng.lng]);

    }

    //Declare Map Objects

    var sector1 = L.polygon([
        [43.25999, -79.92278],
        [43.26179, -79.9231],
        [43.26212, -79.92276],
        [43.26231, -79.92202],
        [43.26253, -79.92161],
        [43.26271, -79.91899],
        [43.26064, -79.91895],
        [43.26017, -79.91965]
    ], {
            color: 'red',
            fillColor: '#f03'
        }).addTo(mymap);

    var sector2 = L.polygon([
        [43.25854178753868, -79.91881012916566],
        [43.26019040880356, -79.91894960403444],
        [43.26074514810156, -79.91850972175598],
        [43.26219838483327, -79.91860628128053],
        [43.2622921408506, -79.91594552993776],
        [43.25915904906948, -79.91607427597046],
        [43.258705870328384, -79.91628885269166]
    ]).addTo(mymap);


    sector1.bindPopup("This is sector 1");

    mymap.on('click', onMapClick);
});
