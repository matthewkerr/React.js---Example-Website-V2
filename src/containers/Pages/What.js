import React from 'react';
import Wrapper from '../../hoc/wrapper';

const about = (props)=> {
    return (
        <Wrapper>
            <div className='image-home lake'> 
                <div className="container topSection centered card-about">
                    <h1 className="display-8">Adventure Hydrology ?</h1>
                            <p> 
                            Adventure Hydrology is my way of bringing you along on my journey, as I explore the science behind water, and how water shapes the environment and our lives.  
                            Together we will learn about our natural word… and experience some amazing adventures!
                            </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default about;