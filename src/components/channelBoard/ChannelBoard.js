import React from 'react';
import ChannelCard from '../channelCard/ChannelCard';
import './ChannelBoard.css'
const url = 'http://localhost:3001/channels';

class ChannelBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  //Fetching data from the BackEnd
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
        })
      });
  }

  //Putting fetched data into ChannelBoard component, which puts data into separate CannelCard components and putting a link to github account in the end
  render() {
    return (
      <div className = "container-flush mx-5 py-5 background shadow rounded">
        <div className = "row justify-content-around">
          {this.state.items.map(item => (
            <ChannelCard key={item.channel}
              channelFromData={item.channel} timeFromData={item.time} titleFromData={item.title} linkFromData={item.link} />
          ))}
        </div>
        <div>
          <a href={'https://github.com/juliuu/broadcast-display/tree/master'} target="blank" className="mt-5">
            {'Source code'}
          </a>
        </div>
      </div>
    );
  }
}

export default ChannelBoard;
