// import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

function App() {
  // return <h1>I am just tryign out stuffs</h1>;

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/error" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
