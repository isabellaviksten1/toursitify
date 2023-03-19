const rapidapikey = process.env.REACT_APP_X_RAPIDAPI_KEY;
const geoapifykey = process.env.REACT_APP_GEOAPIFY_KEY

const  mapSource= {        
        // JS object creation literal

apiCall(params) {
        return fetch(params, {
        "method": "GET",
        "headers": {
                "x-rapidapi-host": "geoapify-platform.p.rapidapi.com",
                "x-rapidapi-key": rapidapikey
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
.then(response => response.json())
.then(response => {return response.features}) //returns a list of objects, (sent to AppModel.js)
},

async searchPlaces(text){
        const data = await (
                mapSource.apiCall(
                        "https://geoapify-platform.p.rapidapi.com/v1/geocode/search?apiKey="
                        +
                        geoapifykey
                        +
                        "&text="
                        +
                        text
                        +
                        "&lang=en&limit=1"

                ));
                return(data);
},


async getLocations(lng= 18.064294433594057, lat=59.33742573706519, type){ 
        const lat1 = lat + 0.0015060 //creating a bounding box from a single coordinate
        const lat2 = lat - 0.0015060

        const lng1 = lng + 0.0015060
        const lng2 = lng - 0.0015060


        const data = await (
                mapSource.apiCall(

                        "https://geoapify-platform.p.rapidapi.com/v1/places?apiKey="
                        +
                        geoapifykey
                        +
                        "&type="
                        +
                        type 
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
                        "8" 
                ) //end of apiCall call
        );
        return data;
}}

export default mapSource;