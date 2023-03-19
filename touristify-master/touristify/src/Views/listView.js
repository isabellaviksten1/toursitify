function compareDistance(a,b){
    let ai= a.properties.distance;
    let bi= b.properties.distance; 
    if (ai < bi){
        return -1
    }
    if (ai > bi){
        return 1
    }
    else {
        return 0
    }
}

function ListView(props) {
    return (
        
            <div>
                    <span id="listbox" > 
                        {
                        (props.ListResults.length !== 0) ? 
                            props.ListResults.sort((a,b) => compareDistance(a,b)).slice(0,7).map(e=> //sorting locations by distance from marker //map instead of foreach, e needs to map over html elements such as <span>, not just stringerroos // key NEEDED!!! 
                                <span key={e.properties.datasources[0].data.osm_id} id="resultbox" onClick={()=> console.log(e.properties.datasources[0].data.osm_id + " klickad")} > 
                                    <div id="resultContent">
                                        <span id="resultTitle"> {e.properties.name} </span>
                                        <span id="resultRating"> Rating: {e.properties.rank.popularity.toFixed(0) + "/10"} </span>   {/*this actually works but nearly all items in mapbox have the same rating of 8.61, occurs due to lack of detailed data in stockholm from the API */}
                                        <div id = "resultDistance"> {(e.properties.distance).toFixed(0) + " meter"} </div>
                                        <div id = "resultDistance"> {(e.properties.datasources[0].data.opening_hours) ? e.properties.datasources[0].data.opening_hours : "No opening hours available"} </div>
                                    </div>
                                </span>
                                )
                            : <div id="noResults"> Click anywhere on the map to find locations :)  </div>
                            }
                    </span>

               
            </div>
    )
}

export default ListView