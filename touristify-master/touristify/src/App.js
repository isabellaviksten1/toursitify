import './App.css';
import AppModel from './js/AppModel';
import ListPresenter from './Presenters/listPresenter';
import SideNavPresenter from './Presenters/sideNavPresenter';
import SearchPresenter from './Presenters/searchPresenter';
import React, { useRef, useEffect, useState } from 'react';
import StartPresenter from './Presenters/startPresenter';
import MainPresenter from './Presenters/mainPresenter';

function App() {

  const ourModel = new AppModel(); //instansiate new model  

  ourModel.initMap(ourModel.mapObject) // run only once, sets up clickability   

  return (
    <div>         
            <StartPresenter model={ourModel}/>,
            <MainPresenter model={ourModel} />,
            <SearchPresenter model = {ourModel}/>  
            <ListPresenter model = {ourModel}/>,
            <SideNavPresenter model = {ourModel}/>,                      
    </div>
  );
}

export default App;