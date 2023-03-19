export default function SideNavView(props) {
/* enabling clickability for buttons in side nav bar to change type */ 
    return (
        <div>
            <div id="sidenav">
                <button className="tooltip" id="icon1"> 
                    <span className="tooltiptext" id="tooltiptext1">
                        <a href="#" onClick={() => props.changeTypes('restaurant')}>Restaurants </a>
                        <br />
                        <a href="#" onClick={() => props.changeTypes('bakery')}>Bakeries </a>
                        <br />
                        <a href="#" onClick={() => props.changeTypes('cafe')}>Cafés</a>
                    </span>
                    <img src="https://img.icons8.com/ios-filled/100/000000/restaurant--v1.png" />
                </button>

                <button className="tooltip" id="icon2">
                    <span className="tooltiptext" id="tooltiptext2">
                        <a href="#" onClick={() => props.changeTypes('bar')}>Bars </a>
                    </span>
                    <img src="https://img.icons8.com/ios-filled/100/000000/cocktail.png" />
                </button>

                <button className="tooltip" id="icon3">
                    <span className="tooltiptext" id="tooltiptext3">
                        <a href="#" onClick={() => props.changeTypes('museum')}>Museums </a>
                        <br />
                        <a href="#" onClick={() => props.changeTypes('park')}>Parks </a>
                        <br />
                        <a href="#" onClick={() => props.changeTypes('church')}>Churches </a>
                    </span>
                    <img src="https://img.icons8.com/ios-filled/100/000000/museum.png" />
                </button>

                <button className="tooltip" id="icon4">
                    <span className="tooltiptext" id="tooltiptext4">
                        <a href="#" onClick={() => props.changeTypes('accommodation')}>Hotels </a>
                        <br />

                    </span>
                    <img src="https://img.icons8.com/ios-filled/100/000000/bed.png" />
                </button>

                <button className="tooltip" id="icon5">
                    <span className="tooltiptext" id="tooltiptext5">
                        <a href="#" onClick={() => props.changeTypes("Stations")}>Stations </a>
                        <br />
                        <a href="#" onClick={() => props.changeTypes('airport')}>Airports </a>
                    </span>
                    <img src="https://img.icons8.com/ios-filled/100/000000/bus.png" />
                </button>
            </div>
        </div>
    )

}
