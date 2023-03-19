function DetailedView(props){
    return(
        <div id="main">
            <div id="infoBox">

                <div>
                    <span id="title">
                        <b>{props.object.title} </b>
                    </span>

                    <button id="cancelButton" onClick={()=>window.location.hash="#list"}>
                        CANCEL
                    </button>
                </div>
                
                <div id="mapImage"> 
                    <img src={props.object.image} ></img>
                </div>
                

                <div id="rating">
                    <span id="ratingProp"> Rating: {(props.object.rating)}</span> 
                </div>

                <div id="description">
                    <span id="descriptionText">
                        <b>Description:</b> {props.dish.description}
                    </span>
                </div>

            </div>
        </div>

        

        
    )
}
