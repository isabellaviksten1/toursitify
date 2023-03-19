function ListPresenter(props) {


    const [promise, setPromise] = React.useState(DishSource.searchDishes({})); //ändra promise!
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);

    React.useEffect(
        function() {

       function observer(){ 
           if(promise) {promise.then(dt => setData(dt)).catch(er => setError(er));
           }
           else {setPromise(DishSource.searchDishes({}));   //ändra promise!
           } }
           props.model.addObserver(observer); return function() {props.model.removeObserver(observer);}
       }, [promise]);

       return (<div>

       {/* <SearchFormView options = {["starter", "main course", "dessert"]} 
                       onText = {txt=> setQuery(txt)}
                       onDishType = {()=> setType(searchType)}
                       onSearch = {()=> {setPromise(DishSource.searchDishes({type: searchType, query: searchQuery}))
                   }}
                       /> */}

       {PromiseNoData(promise, data, error) ||
           <ListView ListResults = {data} />}

       </div>)

} 