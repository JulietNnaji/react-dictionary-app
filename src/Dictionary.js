import React, { useState } from "react";
import axios from "axios";
import FirstDisplay from "./FirstDisplay";
import Images from "./Images";
import './Dictionary.css';
import Word from  './Word.jpg';
import Search from  './Search.jpg';
import Definition from  './Definition.jpg';


export default function Dictionary(){
    let [word, setWords] = useState ("dictionary");
let [result, displayResult] = useState (null);
let [loader, setLoader] = useState(false);
let  [images, setImages] = useState (null);


function displayWord (response) {
    displayResult(response.data[0]);
}

function displayImage (response){
setImages (response.data.photos);
}

function searchWord(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(displayWord);
    
let imageApiKey = "563492ad6f9170000100000184e46b8a93284a14be357f1dd236de04";
let imageApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
axios.get(imageApiUrl, {headers: {"Authorization" : `Bearer ${imageApiKey}`
}}).then(displayImage);
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
                    <div className ="row firstImage">
                        <div className = "col-4">
                    <img src={Word}
                    className ="img-fluid" alt= "words">                  
                    </img>
                    </div>
                    <div className = "col-4">
                    <img src= {Search}
                    className ="img-fluid" alt= "search">                  
                    </img>
                    </div>
                    <div className = "col-4">
                    <img src= {Definition}
                    className ="img-fluid" alt= "definition">                  
                    </img>
                    </div>
                    </div>
                <section>
<form onSubmit= {submitWord} className ="formSearch">
    <input type ="search" placeholder =" Search for a word..." onChange ={wordChange} />
 <button type = "submit" className= "button"> <i className="fa-solid fa-magnifying-glass"></i> </button>
</form>
</section>
<FirstDisplay result ={result}/>
<Images images={images} words={word} />
</div>
        </div>
    );
} else{
    showWord();
    return "Page is loading";
}
}
