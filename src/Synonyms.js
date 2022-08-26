import React from "react";
import './Results.css';

export default function Synonyms (props) {
    if (props.synonyms) {
return (
    <ul className ="unordered">
      {props.synonyms.map(function (synonym, index) {
return (
<li key={index} className ="ordered">
{synonym}
</li>
)
    })}
    </ul>
);
    } else {
        return null;
    }
}