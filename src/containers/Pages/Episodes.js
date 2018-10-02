import React, {Component} from 'react';
import Section from '../../components/Section/Section';
import Wrapper from '../../hoc/wrapper';
import ProjectCard from '../../components/Card/ProjectCard';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/Actions/actions';

class Episodes extends Component {
    

    onProjectClicked =( id ) => {
        
        console.log('id', id);
        
        const episodeIndex = this.props.epis.findIndex( p => {
          return p.id === id;
        } );
        const epsiode =  {
          ...this.props.epis[episodeIndex]
        }
        this.props.onEpisodeSelected( id , episodeIndex );
        this.props.history.push({ pathname: epsiode.pathname + epsiode.id });
      }

    render() {

        let episodes = this.props.epis.map( episode => {
            return  <Wrapper key={episode.id}>
                    <ProjectCard 
                                image={episode.image} 
                                name={episode.name} 
                                description={episode.blurb}
                                clicked={() => this.onProjectClicked(episode.id)} />
                                <br/>
                    </Wrapper>
          })

        return (
            <Wrapper>
                
                <div className='image-home dark-forest'> 
                    <div className="container topSection">
                    <Section label="Episodes" class='topSection' />
                    {episodes}
                    </div>
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        epis: state.episodesReducer.episodes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEpisodeSelected: (id, episodeIndex) => dispatch({ type: actionTypes.SELECT_EPISODE, id: id, episodeIndex:episodeIndex })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( Episodes );