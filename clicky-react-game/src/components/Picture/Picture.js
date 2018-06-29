import React, { Component } from 'react';
import './Picture.css';


class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            
        }
        this.changeClicked = this.changeClicked.bind(this)
    }

    changeClicked() {
        this.setState({ clicked: true });
        console.log('picture');
    }

    render() {
        return (
        <div onMouseUp = {this.changeClicked}>
            <img alt = {this.props.name} src = {this.props.image} value = {this.state.clicked}/>
        </div>  
        )
    }
}


export default Picture;