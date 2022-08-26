import React  from "react";
import Results from "./Results";
import Phonetics from "./Phonetics";
import "./Dictionary.css";

export default function FirstDisplay(props){
    if (props.result){
        return <div>
         <h2 className = "text-capitalize word">
         {props.result.word}
         </h2>
         {props.result.phonetics.map(function(phonetic, index){
            return (
                <div key={index}>
                    <Phonetics phonetic={phonetic} />
                    </div>
            );
         })}
         {props.result.meanings.map(function(meaning, index){
                return (
                    <div key ={index}>
                       <Results meaning ={meaning} />
                        </div>
                );
            }
            )
         }
        </div>
    } else {
        return null;
    }
    }
