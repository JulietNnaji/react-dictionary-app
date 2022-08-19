import React, { useState } from "react";
import axios from "axios";
import FirstDisplay from "./FirstDisplay";
import './Dictionary.css';

export default function Dictionary(){
    let [word, setWords] = useState ("");
let [result, displayResult] = useState (null);

function displayWord (response) {
    displayResult(response.data[0]);
}

    function searchWord(event){
        event.preventDefault();

   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
   axios.get(apiUrl).then(displayWord);
    } 

function wordChange(event){
    setWords(event.target.value);
}

    return (
        <div>
            <div className ="Dictionary">
<form onSubmit= {searchWord} className ="formSearch">
    <input type ="search" placeholder =" Search for a word..." onChange ={wordChange} />
 <button type = "submit" className= "button"> <i className="fa-solid fa-magnifying-glass"></i> </button>
</form>
<FirstDisplay result ={result}/>
</div>
        </div>
    );
}
