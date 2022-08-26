import React from "react";
import Synonyms from "./Synonyms";

export default function Results (props){
return (
    <div>
        <h3>
            {props.meaning.partOfSpeech}
        </h3>
        {props.meaning.definitions.map(function(definition, index)
        {
            return (
                <ul key = {index}>
                    <li>
                    <p>
                        {definition.definition}
                        </p>
                        <p>
                        <em>
                            {definition.example}
                        </em>
                        </p>
                        </li>
                        <strong>
                <Synonyms synonyms= {definition.synonyms} /> 
                 </strong>
               
                    </ul>
            );
        })}
    </div>
);
}