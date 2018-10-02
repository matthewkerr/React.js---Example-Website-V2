import React, {Component} from 'react';
import Wrapper from '../../hoc/wrapper';
import Section from '../../components/Section/Section';
import YouTubePlayer from '../../components/YouTubePlayer/YoutTubePlayer';
import {connect} from 'react-redux';

class Episode extends Component {

    componentWillMount() {
        
    }
    
    render() {
        if ( this.props.epis ) {

            const selectedIndex = this.props.epis.findIndex( p => {
                return p.id === this.props.selectedEpisode;
              } );
            const episode = this.props.epis[selectedIndex];
            const videoId = episode.id;
            const videoCopy = episode.copy;
            const videoSrc = "https://www.youtube.com/embed/" + 
            videoId + "?autoplay=0&rel=0&showinfo=0";
            
            return (

                <Wrapper>
                
                    <div className='image-home dark-forest'> 
                        <div className="container topSection card-about">
                                <Section label="Episodes" class='topSection' />
                                <YouTubePlayer source={videoSrc} />
                                <hr/>
                                <p>{videoCopy}</p>
                        </div>
                    </div>
                </Wrapper>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        epis: state.episodesReducer.episodes,
        selectedEpisode: state.episodesReducer.selectedEpisode
    }
}

const mapDispatchToProps = dispatch => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Episode);