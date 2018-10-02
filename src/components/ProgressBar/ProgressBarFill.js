import React from 'react';

const progressBarFill = (props ) => {
    return( 
        <div className='progress-bar' style={{ width: props.percentage + '%' }} >
        
        </div>
    
    );
};

export default progressBarFill;