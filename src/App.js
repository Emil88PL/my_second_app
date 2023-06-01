import React from 'react';
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import ComponentsWithArrayOfData from './Components/ComponentWithArrayOfData';
import ConditionalRender from './Components/ConditionalRender';
import ConditionalRender2 from './Components/ConditionalRender2';
import ConditionalRender3 from './Components/ConditionalRender3';
import InlineLogicalExpression from './Components/InlineLogicalExpression';
import Name from './Components/Name';
import ComponentWithProps from './Components/ComponentWithProps';
import ComponentWithState from './Components/ComponentWithState';
import ControllerWithControlledInput from './Components/ControllerWithControlledInput';

import ClassComponentClock from './Components/ClassComponentClock';
import FunctionComponentClock from './Components/FunctionComponentClock';

import Sillyname from './Components/SillyName';


function App() {

  const someValue = 10;
  

  const someDataObject = {
    key1: 'value1',
    key2: 2,
    key3: ['array', 'of', 'string']
  };

  // const name = "EMil"

  const someDataArray = [0,1,2,3,4,5,6];

  const someFunction = () => ("A string from a function");


  return (
    <React.Fragment>
      <ComponentWithState />
      <ClassComponentClock />
      <ControllerWithControlledInput />
      <FunctionComponentClock/>
      <Name name="Emil"/>
      <ComponentWithProps 
        headerText="Heading text from header prop"
        numericProp={100}
        expressionProp={100/5}
        valueProp={someValue}
        objectProp={someDataObject}
        arrayProp={someDataArray}
        functionProp={someFunction}
      />
      <First />
      <Second />
      <Third />
      <ComponentsWithArrayOfData />
      <ConditionalRender />
      <ConditionalRender2 />
      <ConditionalRender3 />
      <InlineLogicalExpression />
      <Sillyname />
    </React.Fragment>
  )
};

export default App;