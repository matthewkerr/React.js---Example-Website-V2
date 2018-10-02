import React from 'react';

const footerIcons = (props) => {
    return(
        <div className="footer-social-icons">
                <ul className="social-icons">
                    <li><a href="https://www.facebook.com/adventurehydrology/" rel="noopener noreferrer" target='_blank' className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/thewolffcode" rel="noopener noreferrer" target='_blank' className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCkgji24qYW8vBG9tMaaT77w/featured" rel="noopener noreferrer" target='_blank' className="social-icon"> <i className="fa fa-youtube"></i></a></li>
                </ul>
        </div>
    )
}

export default footerIcons;