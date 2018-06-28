import React from 'react';
import './Picture.css';



const Picture = props => (
        <div className = 'card' value = {props.clicked} >
            <img alt = {props.name} src = {props.image} />
        </div>  
        
    
)

export default Picture;