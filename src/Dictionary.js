import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';

export default function Dictionary(){
    let [word, setWords] = useState (null);

function displayWord (response) {
    console.log(response.data);

}

    function searchWord(event){
        event.preventDefault();
        alert (` Searching for ${word}...`);
   
   let apiUrl = `https://api.dictionaryapi.dev/api/v2entries/en/${word}`;
   axios.get(apiUrl).then(displayWord);
    } 

function wordChange(event){
    setWords(event.target.value);
}

    return (
        <div className= "container">
            <div className ="Dictionary">
<form onSubmit= {searchWord}>
    <input type ="search" placeholder =" Search for a word..." onChange ={wordChange} />
 <button type = "submit" className= "button"> <i className="fa-solid fa-magnifying-glass"></i> </button>
</form>

</div>
        </div>
    );
}
