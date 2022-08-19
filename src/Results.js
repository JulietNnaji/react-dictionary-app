import React from "react";

export default function Results (props){
return (
    <div>
        <h3>
            {props.meaning.partOfSpeech}
        </h3>
        {props.meaning.definitions.map(function(definition, index)
        {
            return (
                <ul>
                <li key = {index}>
                    <p>
                        {definition.definition}
                        </p>
                        <p>
                        <em>
                            {definition.example}
                        </em>
                        </p>
                    </li>
                    </ul>
            );
        })}
    </div>
);
}