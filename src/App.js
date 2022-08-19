import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className ="container">
      <div className ="App">
      <h1>
 Dictionary
 </h1>
 <div>
<Dictionary />
</div>
<hr />
<footer  className ="owner">
  This App is <a href ="https://github.com/JulietNnaji/react-dictionary-app" target= "_blank" rel = "noreferrer"> open-sourced </a> and coded by <a href ="https://github.com/JulietNnaji" target= "_blank" rel = "noreferrer"> Juliet Nnaji </a>
</footer>
    </div>
    </div>
  );
}

