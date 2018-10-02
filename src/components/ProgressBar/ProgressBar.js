import React from 'react';
import ProgressBarFill from './ProgressBarFill';

const progressBar = (props ) => {
    return( 
        <div className='progress'>
            <ProgressBarFill percentage={props.percentage} />
        </div>
    
    );
};

export default progressBar;