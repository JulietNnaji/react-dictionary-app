import React from "react";
import './Images.css';

export default function Images (props){
    if (props.images) {
        return (
        <section>
            <div className="row">
            {props.images.map(function (image, index) {
                return ( 
                <div className = "col-4" key={index}>
                <a href ={image.src.original} target="_blank" rel="noreferrer">
                    <img src= {image.src.tiny} className = "img-fluid" alt= {props.words}/>
            </a>
            </div>
                )
            })}
            </div>
        </section>
    )
} else {
    return null;
}
}