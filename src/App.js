import React from 'react';
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import ComponentsWithArrayOfData from './Components/ComponentWithArrayOfData';



function App() {
  return (
    <React.Fragment>
      <First />
      <Second />
      <Third />
      <ComponentsWithArrayOfData />
    </React.Fragment>
  )
};


export default App;