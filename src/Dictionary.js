import React, { useState } from "react";
import axios from "axios";
import FirstDisplay from "./FirstDisplay";
import './Dictionary.css';

export default function Dictionary(){
    let [word, setWords] = useState ("search");
let [result, displayResult] = useState (null);
let [loader, setLoader] = useState(false);

function displayWord (response) {
    displayResult(response.data[0]);
}

function searchWord(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(displayWord);
     } 
 

    function submitWord(event){
        event.preventDefault();
     searchWord();
    }
function wordChange(event){
    setWords(event.target.value);
}

function showWord(){
    setLoader (true);
    searchWord();
}

if (loader){
    return (
        <div>
            <div className ="Dictionary">
                <section>
<form onSubmit= {submitWord} className ="formSearch">
    <input type ="search" placeholder =" Search for a word..." onChange ={wordChange} />
 <button type = "submit" className= "button"> <i className="fa-solid fa-magnifying-glass"></i> </button>
</form>
</section>
<FirstDisplay result ={result}/>
</div>
        </div>
    );
} else{
    showWord();
    return "Page is loading";
}
}
