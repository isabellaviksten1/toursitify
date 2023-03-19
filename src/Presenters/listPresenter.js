//import React from "react"
import React from 'react'
import ListView from "../Views/listView";


function ListPresenter(props) {
    //console.log(props)
    const [currentLocations, setCurrentLocations] = React.useState(props.model.currentLocations)

React.useEffect(function(){  
    function observer(){        
        setCurrentLocations(props.model.currentLocations);
        }
        props.model.addObserver(observer);
         return function() {props.model.removeObserver(observer);}
    }, [currentLocations]);
    
    return( <ListView ListResults = {currentLocations}  />)

} 

export default ListPresenter