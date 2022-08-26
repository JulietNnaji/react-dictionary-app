import React from "react";
import './Synonyms.css';

export default function Phonetics (props){
    return (
        <div>
            <button type = "button" className="phonetic">
                <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                    Listen
                </a>
            </button>
            {props.phonetic.text}
        </div>
    );
}