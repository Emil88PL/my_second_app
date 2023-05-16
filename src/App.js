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






function App() {
  return (
    <React.Fragment>
      <First />
      <Second />
      <Third />
      <ComponentsWithArrayOfData />
      <ConditionalRender />
      <ConditionalRender2 />
      <ConditionalRender3 />
      <InlineLogicalExpression />
    </React.Fragment>
  )
};


export default App;