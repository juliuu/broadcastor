import React from 'react';
import './ChannelCard.css';

//Creating ChannelCard component, that displays a channel name, timeframe and title of the show and drops a link to that show
class ChannelCard extends React.Component {
  render(){
    const {channelFromData, timeFromData, titleFromData, linkFromData} = this.props;
    return (
      <div className="card colors mx-5 my-3" style={{width: '320px'}}>
        <div className="card-body">
          <h4 className="card-title channel-txt">{channelFromData}</h4>
          <p className="card-text">{timeFromData}</p>
          <h5 className="card-title">{titleFromData}</h5>
          <a href={linkFromData} target="blank" className="btn btn-primary">{'Watch it!'}</a>
        </div>
      </div>
    );
  }
}

export default ChannelCard;
