import './App.css';
import AppModel from './js/AppModel';


     
function App() {

  //mapSource.getLocations(getCoordinates(myMap))

  const ourModel = new AppModel();
  ourModel.getCoordinates(ourModel.mapObject)


  console.log("hi")
  return (

    <div>
    
    </div>

    
  );
}

export default App;