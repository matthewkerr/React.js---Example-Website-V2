import React from 'react';
import { NavLink} from 'react-router-dom';

const navItem = (props) => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
        <li className={liClassName}>
            <NavLink 
                to={props.link}
                exact={props.exact}
                className='nav-link'
                activeClassName={aClassName}
                onClick={props.clicked}>
                {props.children}
            </NavLink>
        </li>
    );
};

export default navItem;