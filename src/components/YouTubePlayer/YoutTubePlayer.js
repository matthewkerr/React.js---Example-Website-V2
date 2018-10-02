import React, { Component  } from 'react';
 
class YouTubePlayer extends Component {

    state = {
        isPlaying: false
    }
 
onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
}  

onPlay(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
}  

render() {
    return (
      <div className="container-video card-episode">
      <iframe title='frame' className="player" type="text/html" width="100%" height="100%"
      src={this.props.source}
      frameBorder="0"/>
      </div>
    );
  }
}

export default YouTubePlayer;