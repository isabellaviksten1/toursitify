function SearchPresenter(props) {

    const [promise, setPromise] = React.useState(DishSource.searchDishes({})); // Ändra promise!
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);

    React.useEffect(
     function() {

    function observer(){ 
        if(promise) {promise.then(dt => setData(dt)).catch(er => setError(er));
        }
        else {setPromise(DishSource.searchDishes({}));
        } }
        props.model.addObserver(observer); return function() {props.model.removeObserver(observer);}
    }, [promise]);

    return (<div>

    <SearchView //onText = {txt=> setQuery(txt)}
                onSearch = {()=> {setPromise(DishSource.searchDishes({type: searchType, query: searchQuery})) //Ändra promise!
                }}
                    />

    </div>)
} 