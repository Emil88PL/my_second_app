import logo from './logo.svg';
import React from 'react';
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';



function App() {
  return (
    <React.Fragment>
      <First />
      <Second />
      <Third />
    </React.Fragment>
  )
};


export default App;






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
