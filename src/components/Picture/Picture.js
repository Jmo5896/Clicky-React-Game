import React, { Component } from 'react';
import './Picture.css';


function Picture (props) {
    
        return (
            <div className = 'card'>
            <img alt = {props.name} src = {props.image} data-id = {props.id} onClick={props.onClick} />
        </div>  
        )
}


export default Picture;