import React from "react";
import Synonyms from "./Synonyms";
import './Results.css';

export default function Results (props){
return (
    <section>
        <h3>
            {props.meaning.partOfSpeech}
        </h3>
        {props.meaning.definitions.map(function(definition, index)
        {
            return (
                <ul key = {index}>
                    <li>
                    <p className="definition">
                        {definition.definition}
                        </p>
                        <p className="example">
                            {definition.example}
                        </p>
                        </li>
                        
                        <strong className="synonym">
                <Synonyms synonyms= {definition.synonyms} /> 
                 </strong>
               
                    </ul>
            );
        })}
        </section>
);
}