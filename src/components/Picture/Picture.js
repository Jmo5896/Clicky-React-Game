import React, { Component } from 'react';
import './Picture.css';


function Picture (props) {
    
        return (
            <div className = 'card' >
            <img alt = {props.name} src = {props.image} />
        </div>  
        )
}


export default Picture;