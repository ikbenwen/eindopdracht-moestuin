import React, { useState, Component } from "react";
import { useForm } from "react-hook-form";
import './App.css';
import './components/RegistrationForm.css'


import RegistrationForm from "./components/RegistrationForm";

//
function App () {
  return (
      <div className="App">
        <RegistrationForm/>
      </div>
  );
};

export default App;
