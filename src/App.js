import React from "react";
import Home from "./components/Home";
import AppBar from "./components/common/AppBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LogTable from "./components/LogTable";
import WaNotify from "./components/WaNotify";
import EmailNotify from "./components/EmailNotify";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/logs" element={<LogTable />} />
          <Route exact path="/email" element={<EmailNotify />} />
          <Route exact path="/whatsapp" element={<WaNotify />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
