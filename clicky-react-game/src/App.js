import React, { Component } from 'react';
import Footer from './components/Footer';
import Picture from './components/Picture';
import images from './components/images.json';

class App extends Component {
  state = {
    images: images,
    score: 0,
    top_score: 0
  }

  
  // switchClick = () => {
    
  //     this.setState({ score: this.state.score + 1}) ;
  //     this.setState({ score: newScore });
  //     let changeClick = this.state.clicked;
  //     this.setState(changeClick => {
  //       images[0].clicked = true;
  //     });
    
    
  // }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className = 'col-sm-4'>
              <a className="navbar-brand" href="/">
                <h3>Clicky Game!</h3>            
              </a>
            </div>
            <div className = 'col-sm-4'>
              <h3>Click an image to begin</h3>
            </div>
            <div className = 'col-sm-4'>
              <h3>Score: {this.state.score} | Top Score: {this.state.top_score}</h3>
            </div>
          </nav>
        <div className = 'container'>
          <div className = 'flex-container'>
              {this.state.images.map(pic => (
                <Picture 
                  id = {pic.id}
                  key = {pic.id}
                  image = {pic.image}
                 
                />
              ))}
          </div>
        </div> 
        <Footer />
      </div>
    );
  }
}

export default App;
