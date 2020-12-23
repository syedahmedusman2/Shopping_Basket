import React from 'react';
import './App.css';
import Main from './components/Main';

// import {useDispatch, useSelector} from 'react-redux'
// import {Add_To_Basket, Remove_From_Basket} from './controller/controllerSlice';
// import {State} from '../src/controller/slicetypes'


function App() {
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;