import React from 'react';
import Wrapper from '../../hoc/wrapper';

const projectCard = (props) => {
    return (
        <Wrapper>
        <div className='row card-project' onClick={props.clicked}>
            <div className="col-md-7 ">
                <img className="img-fluid rounded mb-2 mb-md-0 " src={props.image} alt=""  />
            </div>
            <div className="col-md-5">
                <h2 className="text-purple card-project-title">{props.name}</h2>
                <p className="text-purple">{props.description}</p>
            </div>
        </div>
        </Wrapper>
      
    )
}

export default projectCard;