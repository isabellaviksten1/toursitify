import SideNavView from "../Views/sideNavView"
export default function SideNavPresenter(props) {
    return(
        
            <SideNavView 
            changeTypes  = {e=>props.model.setTypes(e)}
            />
    )    
}
