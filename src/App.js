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
    
    scoreKeeper() {
      
        if (document.getElementById("parent").children[0].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
          alert(newScore);
        } else if (document.getElementById("parent").children[1].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[2].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[3].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[4].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[5].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[6].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[7].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[8].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[9].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[10].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        } else if (document.getElementById("parent").children[11].children[0].children[0].attributes[1].value === false) {
          let newScore = this.state.score + 1;
          this.setState({score: newScore });
        }else {
          alert('else');
          // this.setState({score: 0 });
        }
        // console.log(document.getElementById("parent").children[i].children[0].children[0].attributes[1].value);
      
      console.log('app');  
    };

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
                <div className = 'card' key = {pic.id} onMouseDown = {this.scoreKeeper}>  
                  <Picture 
                    id = {pic.id}
                    image = {pic.image}
                                    
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
