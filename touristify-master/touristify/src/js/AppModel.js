import mapSource from './mapSource';

const mapboxkey = process.env.REACT_APP_MAPBOXGL_KEY

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = mapboxkey;
class AppModel {

    constructor(currentLatLng = { lat: 59.33742573706519, lng: 18.064294433594057 }, currentLocations = [], types = ['cafe'] //default coordinates for stockholm
, observers = []) {
        this.observers = [...observers];

        this.mapObject = new mapboxgl.Map({container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v10', // style URL
            center: [18.1, 59.32], // starting position [lng, lat]
            zoom: 9 // starting zoom
        
        });

        this.currentLatLng = currentLatLng;
        this.currentLocations = currentLocations;
        this.types = [...types];
        this.notifyObservers = this.notifyObservers.bind(this);
        

    }

    notifyObservers(){
        console.log(this.observers)
        this.observers.forEach(cb => {try {cb()} catch (error) { console.log("error in notifyobserver")};})
    
    }

    addObserver(callback) {
        return this.observers = [...this.observers, callback]  
    }

       // add callback to this.observers.  See e.g. in lectures immutable way to append x to arr

    removeObserver(callback){
        return this.observers =  [...this.observers].filter(observer => observer !== callback)
    }


    setTypes(input) {

        if (input === "restaurant") {this.types = ["restaurant"]}

        if (input ==="cafe") {this.types = ["cafe"]}

        if (input ==="bakery") { this.types = ["bakery"] }

        if (input ==="bar") { this.types = ["bar"] }

        if (input ==="museum") { this.types = ["museum"] }

        if (input ==="park") { this.types = ["park"] }

        if (input ==="church") { this.types = ["church"] }

        if (input ==="accommodation") { this.types = ["accommodation"] }

        if (input ==="airport") { this.types = ["airport"] }

        if (input === "Stations") { this.types = ['subway_station', "train_station", "transit_station"] }

        this.notifyObservers();
        console.log("type has been set")
        }    

    initMap(mapObject) {
        mapObject.on('style.load',  () => {
            mapObject.on('click', (e)  => {
                var mapMarker = new mapboxgl.Marker(); //TODO: make custom marker that is a transparent ring with radius equal to search radius (currently ~0.0015 coordinate units)

                function add_marker(event) {
                    var markerCoords = event.lngLat;
                    mapMarker.setLngLat(markerCoords).addTo(mapObject);
                }
                function remove_marker(){
                    mapMarker.remove()
                }
                    
                add_marker(e)

                mapObject.on('click', remove_marker);
         
                /* Set coordinates */
                let coordinates = e.lngLat;
                this.currentLatLng = coordinates //here the models this.currentLatLng has changed yeaaaaaahhh

                /* Set locations */
                let totalLocations = [];
                for (const type of this.types)   //types as model prop
                    {
                    const someLocations = mapSource.getLocations(this.currentLatLng["lng"], this.currentLatLng["lat"], type) //call the getLocation fetcher for each type
                    someLocations.then(e => {
                        var data = e; data.forEach(element => {totalLocations = [...totalLocations, element] });


                        totalLocations = Array.from(new Set([...totalLocations].map(JSON.stringify))).map(JSON.parse); //dont worry about this it works
                        totalLocations = Array.from(new Set([...totalLocations].map(JSON.stringify))).map(JSON.parse);
                    
                        //concatenate all the promise results into one large list //TODO: this e=>... can really be boiled down a lot but last time i touched it took 6 hours to fix 
                        this.currentLocations = totalLocations; // set the big list to the models currentLocations
                        this.notifyObservers();

                    });

                } //THIS WORKS YEAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHH 
                
            });

        });

    }
}

export default AppModel;