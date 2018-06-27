import React from 'react';
import './Picture.css';


const Picture = props => (
    <div className = 'col-sm-1'>
        <div className = 'card'>
            <img alt = {props.name} src = {props.image} />
        </div>
    </div>    
        
    
)

export default Picture;