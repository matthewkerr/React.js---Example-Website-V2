import React from 'react';
import Wrapper from '../../hoc/wrapper';

const about = (props)=> {
    return (
        <Wrapper>
            <div className='image-home yellowstone'> 
                <div className="container topSection centered card-about">
                    <h2>A little about Me...</h2>
                        <p>I am a hydrologist (aka – water scientist), adventurer, and filmmaker who uses visual imagery, stunning video and outstanding 
                        storytelling to connect people to our ever changing planet.  With a M.S in Water Resources and over 10 years of experience working as a Hydrologist  
                        for organizations such as the U.S. Fish and Wildlife Service, State of New Mexico and County of San Diego, I am now brining you along on my 
                        adventures to show you how truly amazing our planet is. I want you to know about all the amazing efforts the volunteers, scientists and conservationists are doing to keep our planet spinning. 
                        That is all changing now with Adventure Hydrology… and you should be a part of it.</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default about;