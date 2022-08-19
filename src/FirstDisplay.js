import React  from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function FirstDisplay(props){
    if (props.result){
        return <div>
         <h2 className = "word">
         {props.result.word}
         </h2>
         {
            props.result.meanings.map(function(meaning, index){
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
