import React from 'react';
import FooterIcons from './FooterIcons';

const footer =(props) => {
    return (
        <footer className={props.class}>
            <div className="container bg-blue">
                <FooterIcons />
                <div className="text-center">Copyright 2018 Adventure Hydrology.</div>
            </div>
      </footer>
    );
};

export default footer;