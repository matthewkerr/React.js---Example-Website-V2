import React, {Component} from 'react';
import Wrapper from '../../hoc/wrapper';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/Actions/actions';

class Home extends Component {

    state = {
        seconds: 0,
        selectedIndex: 0,
        percentage: 0,
    }
    
    componentDidMount() {
        this.timer = setInterval( this.tick, 1000 );
    }

    componentWillUnmount() {
        clearInterval( this.timer );
    }

    tick = () => {

        if (this.state.seconds === 4) {
            let currentIndex = this.state.selectedIndex;
            const newIndex = ( this.state.selectedIndex === 3 ) ? 0 : currentIndex + 1
            this.setState({selectedIndex: newIndex, percentage: 0, seconds: 0 });
        } else {
            const seconds = this.state.seconds
            const percentage = this.state.percentage;
            this.setState({seconds: seconds + 1 , percentage: percentage + 20});
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // You can access `this.props` and `this.state` here
        // This function should return a boolean, whether the component should re-render.
        return  ( nextState.selectedIndex !== this.state.selectedIndex );
    }
    
    clicked = () => {
        const episodeIndex = this.props.epis.findIndex( p => {
            return p.id === this.props.epis[this.state.selectedIndex].id;
          } );
          const episode =  {
            ...this.props.epis[episodeIndex]
          }
        this.props.onEpisodeSelected( this.props.epis[this.state.selectedIndex].id , episodeIndex );
        this.props.history.push({ pathname: episode.pathname + episode.id });
    }
    
    render() {
        const className = this.props.epis[this.state.selectedIndex].className;

        console.log("className", className)
        return ( 
            <Wrapper>
                <div onClick={this.clicked} className={'image-home ' + className }>
                <div className="container topSection"></div>
                </div>
            </Wrapper>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)( Home );