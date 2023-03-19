
 const  mapSource= { 
         
        
        
        // JS object creation literal
apiCall(params) {
        console.log(params)
        return fetch(params, {
        "method": "GET",
        "headers": {
                "x-rapidapi-host": "geoapify-platform.p.rapidapi.com",
                "x-rapidapi-key": "3ad440a4d5msh2fc9b14275b15aep13ba47jsna66bd2d61059"
        }
                
}).then(response => {
        if (response.ok) {
                return response
                
        }
        else {
                throw (response.statusText);
        }
})

// from HTTP response headers to HTTP response data
.then(response => console.log(response.json())) //FIXME: response is undefined Why ????


},
getLocations(lng=18.060120486503394,lat=59.33783077459509){ //add type as variable
        //type = 'airport', 'bakery', 'bar', 'bus_station', 'cafe', 'kindergarten', 'laundry', 'museum', 'park', 'parking', 'pharmacy', 'church', 'city_hall', 'dentist', 'department_store', 'doctor', 'gas_station', 'hospital', 'police', 'post', 'restaurant', 'school', 'shop', 'subway_station', 'supermarket', 'taxi', 'train_station', 'transit_station', 'veterinary', 'zoo', 'accommodation-hotel' //add rest of accomodationasd
        const lat1 = lat + 0.0015060
        const lat2 = lat - 0.0015060

        const lng1 = lng + 0.0015060
        const lng2 = lng - 0.0015060

        const type = "church"

        //"https://geoapify-platform.p.rapidapi.com/v1/geocode/search?apiKey=47c682add85b4e3cb33f5fcc82e1ddd6&text=Empire%20State%20Building%20in%20New%20York&lat=40.74&lon=-73.98&lang=en&limit=1"
        //
        return(
                mapSource.apiCall(                        

                        "https://geoapify-platform.p.rapidapi.com/v1/places?apiKey="
                        +
                        "60908aa0439a46b58923841e469e02b1"
                        +
                        "&type="
                        +
                        type //could be variable, for filter
                        +
                        "&lat1="
                        +
                        lat1
                        +
                        "&lat2="
                        +
                        lat2    
                        +
                        "&lon1="
                        +
                        lng1
                        +
                        "&lon2="
                        +
                        lng2
                        +
                        "&lim="
                        +
                        "9" //could be variable, to change how manyt are shown in öist   
                        ) //end of apiCall call
                )

}}


export default mapSource;

