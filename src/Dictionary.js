import React, { useState } from "react";
import './Dictionary.css';

export default function Dictionary(){
    let [words, setWords] = useState (null);

    function searchWord(event){
        event.preventDefault();
        alert (` Searching for ${words}...`);
    } 

function wordChange(event){
    setWords(event.target.value);
}

    return (
        <div className= "container">
            <div className ="Dictionary">
<form onSubmit= {searchWord}>
    <input type ="search" placeholder =" Search for a word..." onChange ={wordChange} />
 <button type = "submit" class= "button"> <i class="fa-solid fa-magnifying-glass"></i> </button>
</form>

</div>
        </div>
    );
}
