import React, { Component } from 'react';
import { drums, url, track, trackMap, keyMap } from '../data';
import '../App.css';
import DrumPad from './DrumPad';

// https://stackoverflow.com/questions/43503964/onkeydown-event-not-working-on-divs-in-react

class App extends Component {
  constructor() {
    super();
    this.state = { lastTrackPlayed: 'Let\'s begin', soundId: '' };
    this.playSound = this.playSound.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

   componentDidMount() {
   document.addEventListener("keydown", this.handleKeyDown);
  }
  
  componentWillUnmount() {
   document.removeEventListener("keydown", this.handleKeyDown);
  }
  
removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  playSound(e) {
   document.getElementById(this.state.soundId).currentTime = 0;
    document.getElementById(this.state.soundId).play();
    
    }
    
  handleKeyDown(e){
    const key = keyMap[e.keyCode];
    const newTrack = trackMap[e.keyCode];
    const isValidKey = Object.keys(track).includes(key);
    this.setState( { soundId: (isValidKey) ? key : '' ,
                     lastTrackPlayed:(isValidKey)? newTrack : ''} );
  }

  handleClick(e) {
     this.setState( { soundId: e.target.children[0].id, lastTrackPlayed: e.target.id });
  }
   
  render() {
    let message = 'Let\'s begin!'
    if (this.state.soundId) {
      const message = `Sound: ${track[this.state.soundId]}`;
      this.playSound()
    }

    return (
      <div id="display">
        <h1 className="header">Drum Machine</h1>
        <p className="message">Track: {this.state.lastTrackPlayed}</p>
      <div className="container">
                {Object.keys(track).map((letter, i) => {
          return (
            <DrumPad
              className="drum-pad"
              track={Object.values(track)[i]}
              keyCode={Object.keys(keyMap)[i]}
              key={Object.keys(keyMap)[i]}
              kbdKey={Object.keys(track)[i]}
              audio={`${url}${Object.values(track)[i]}.mp3`}
              handleClick={this.handleClick}
              onKeyDown={(e) => this.handleKeyDown(e)}
            />
          );
        })}
          </div>
      </div>
    );
  }
}

export default App;
