import React from 'react';
import Particles from 'react-particles-js';
import Title from './components/title/Title';
import ChannelBoard from './components/channelBoard/ChannelBoard';
import './App.css';

//Setting background component (<Particles />) options
const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 80
      }
    }
  }
}

const App = () => {
  return (
    <div className="App">
      <Particles className="particles" params={particleOptions}/>
      <Title />
      <ChannelBoard />
    </div>
  );
}

export default App;
