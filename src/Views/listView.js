function ListView(props){
    return(
        <div id="ListResults">
            {props.ListResults.map(object => 

                <li key = {object.id} >
                    <span id = "ListObject" onClick={() => window.location.hash="#details"}>

                        <div>
                            <span id = "objectTitle"> {object.title} </span>
                            <span id = "objectRating"> {object.rating} </span>
                            <img id = "objectImage" src = {object.image}> </img>        
                        </div>
                        
                        <div>
                            <span id = "objectType"> {object.type} </span>
                            <span id = "objectDistance"> {object.distance} </span>
                        </div>

                    </span>
                </li>

            )}

         </div>
    )}
