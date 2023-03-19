import mapSource from "../js/mapSource";
import SearchView from "../Views/searchView";
import React from "react";
import App from "../App";


function SearchPresenter(props) {

    const [promise, setPromise] = React.useState(mapSource.searchPlaces());
    var queryRef = React.useRef("")

    React.useEffect(
     function() {

    function observer(){ 
        setPromise(mapSource.searchPlaces());
      }
        props.model.addObserver(observer); return function() {props.model.removeObserver(observer);}
    }, [queryRef]);
    

    return (<div>

    <SearchView onText = {txt => queryRef = txt}
                

                onSearch = {()=> {
                    props.model.search =
                        setPromise(mapSource.searchPlaces(queryRef).then(function(e){
                            try{ //error handling for non existant query results

                                (props.model.currentLatLng = {lat: e[0].properties.lat, lng: e[0].properties.lon})
                            }
                            catch{
                            console.log("location does not exist")
                            }
                        } ))

                    props.model.mapObject.flyTo({center: [props.model.currentLatLng["lng"], props.model.currentLatLng["lat"]]})
                    props.model.mapObject.zoom = 20;

                }}
                    />

    </div>)
} 

export default SearchPresenter