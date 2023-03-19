function DetailedPresenter(props) {
    const [currentObject, setCurrentObject] = React.useState(props.model.currentObject);
    const [currentObjectDetails, setCurrentObjectDetails] = React.useState(null);
    const [currentObjectError, setCurrentObjectError] = React.useState(null);
    const [object, setObject] = React.useState(props.model.objects);      
    
    React.useEffect(function() {
        function obs(){
            setCurrentObject(props.model.currentObject);
            setCurrentObjectDetails(props.model.currentObjectDetails);
            setCurrentObjectError(props.model.currentObjectError);
            setObject(props.model.object);
        }
        props.model.addObserver(obs);
        return function() {
            props.model.removeObserver(obs);
        }
    }, []);

    return (
        promiseNoData(currentObject, currentObjectDetails, currentObjectError) || (
            <DetailedView 
                isObjectInList = {props.model.objects.find(obj => {
                    return obj.id === currentObject
                })}
                object = {props.model.currentObjectDetails}
                // dishAdded = {event => setDishes(props.model.addToMenu(props.model.currentDishDetails))} oklart om vi vill lägga nåt i listan
            />
        )
    )
}