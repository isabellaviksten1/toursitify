import mapSource from './mapSource';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoidG91cmlzdGlmeSIsImEiOiJja3d0M2E0ajMxY2QyMm5sY2FpYnlzdWc4In0.2yb4xj6TGJC-z-dFPSaX6g';

class AppModel{
    constructor(currentLatLng = {lat:0,lng:0}){
        this.mapObject = new mapboxgl.Map({
                        container: 'map', // container ID
                        style: 'mapbox://styles/mapbox/streets-v10', // style URL
                        center: [18.1, 59.32], // starting position [lng, lat]
                        zoom: 9 // starting zoom
                        });
        this.currentLatLng = currentLatLng;
    }

    getCoordinates(mapObject){
        mapObject.on('style.load', function() {
            mapObject.on('click', function(e) {
                let coordinates = e.lngLat;
        
                //console.log(coordinates)
                this.currentLatLng = coordinates //here the models this.currentLatLng has changed yeaaaaaahhh 
                mapSource.getLocations(this.currentLatLng["lng"], this.currentLatLng["lat"])
                console.log("this" + this.currentLatLng)
            });
        });
    }
}

export default AppModel;