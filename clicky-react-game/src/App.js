import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Picture from './components/Picture';
import images from './components/images.json';

class App extends Component {
  state = {
    images
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className = 'container'>
          <div clasName = 'row'>
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
