import React from 'react';
import '../channelCard/ChannelCard.css'

//Creating a Website title component
const Title = () => {
  return (
    <div className = "d-flex justify-content-center mt-4 mb-2 mx-0" >
      <p className = "h2 channel-txt">
        {`LRT's current broadcasts`}
      </p>
    </div>
  );
}

export default Title;
