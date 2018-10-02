import React, {Component} from 'react';
import NavItem from './NavItem/NavItem';
import BrandImage from '../../assets/images/ah_wolf_whitei.png';
import Wrapper from '../../hoc/wrapper';

class Navbar extends Component {
    state = {
        navCollapsed: true
    }

    onToggleNavigation = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }
    
    render() {

        const {navCollapsed} = this.state;
        return (
            <Wrapper>
            <nav className={this.props.class}>
            <div className="container text-white">
              <a className="navbar-brand" href="/"><img className='brand-logo' src={BrandImage} alt='logo' />Adventure Hydrology</a>
              <button  onClick={this.onToggleNavigation} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} id="navbarResponsive">
                <ul className="navbar-nav ml-auto ">
                <NavItem link={"/"}clicked={this.onToggleNavigation}>Home</NavItem>
                <NavItem link={"/Episodes"}clicked={this.onToggleNavigation}>Episodes</NavItem>
                <NavItem link={"/About"} clicked={this.onToggleNavigation}>About</NavItem>
                <NavItem link={"/What"} clicked={this.onToggleNavigation}>What</NavItem>
                <NavItem link={"/Contact"}clicked={this.onToggleNavigation}>Contact</NavItem>
                </ul>
              </div>
              </div>
          </nav>
        </Wrapper>
        )
    }
}

export default Navbar;
