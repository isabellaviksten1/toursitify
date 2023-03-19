function SearchView(props){
    return (
        <div>
            <input id = "searchInput" type = "text"/>
            <button id = "searchButton" onClick={e => {props.onSearch(e.target.value); window.location.hash = "#list"}}> Search places </button>
        </div>

    );
} 