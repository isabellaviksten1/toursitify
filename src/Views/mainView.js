// view that shows map
export default function MainView(props){
    return(
        <div>
        <h2 id="titleDescription"> Showing the best of &nbsp; "{props.changeTypes()}"&nbsp; near you. </h2> {/*changes a info string based on current location */}
    </div>
    )
}