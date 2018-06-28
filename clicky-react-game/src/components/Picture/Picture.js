import React, { Component } from 'react';
import './Picture.css';


class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.changeClicked = this.changeClicked.bind(this)
    }

    changeClicked() {
        this.setState({ clicked: true })
    }

    render() {
        return (
            <div className = 'card' onClick={this.changeClicked} >
            <img alt = {this.props.name} src = {this.props.image} />
        </div>  
        )
    }
}


export default Picture;