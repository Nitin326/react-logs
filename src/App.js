import React from 'react';
import AppBar from './components/common/AppBar.jsx';
import Dashboard from './components/Dashboard.jsx';
// import Home from './components/Home.jsx';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Dashboard/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
