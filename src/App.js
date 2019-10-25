import React, { Component } from 'react';
import Footer from './components/Footer';
import Picture from './components/Picture';
import images from './components/images.json';

class App extends Component {
  state = {
    images: images,
    score: 0,
    top_score: 0,
    clickedPics:[]
  }
  
updateTS = score => {
  if (score > this.state.top_score) {
    return score;
  } else {
    return this.state.top_score;
  }
}

  clickPic = (e) => {
    const userPick = e.currentTarget.dataset.id
    console.log(userPick);
    if (!this.state.clickedPics.includes(userPick)) {
      this.setState({
        clickPics: this.state.clickedPics.push(userPick),
        score: this.state.score+1,
        top_score: this.updateTS(this.state.score+1)
      });
    } else {
      this.setState({
        images: images,
        score: 0,
        clickedPics:[]
      });
    }
    this.setState({images: this.shufflePic(this.state.images)});
  }

  shufflePic = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
  
  }
  
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
        <div className = 'container' >
          <div className = 'flex-container' id = 'parent'>
              {this.state.images.map(pic => (
                <div className = 'card' key = {pic.id}>  
                  <Picture 
                    id = {pic.id}
                    image = {pic.image}
                    onClick = {this.clickPic}
                                    
                  />
                </div>    
              ))}
          </div>
        </div> 
        <Footer />
      </div>
    );
  }
}

export default App;
