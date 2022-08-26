import React from "react";
import './Results.css';

export default function Phonetics (props){
    return (
        <div>
            <button type = "button" className="phonetic">
                <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                    Listen
                </a>
            </button>
            <span className ="phoneticText">
            {props.phonetic.text}
        </span>
        </div>
    );
}