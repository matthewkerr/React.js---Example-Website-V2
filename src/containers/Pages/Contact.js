import React from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

const contact = (props) => {
    return (
        <div className='image-home ocean'>     
            <Jumbotron class='jumbotron bg-transparent text-white '>
                <div className="container centered">
                    <div className="row card-project">
                        <div className="col-sm-12">
                            <h1 className="display-8">Let's Connect</h1>
                            <h1 className="display-email">adventurehydro@gmail.com</h1>
                            <p>I am currently seeking out new adventures, new stories and new 
                        friends who can use a bit of help telling their own tails about how they are making this world an amazing place to live.</p>  
                        <p>
                        If you have a story to tell, are doing something profound, or want Me to join you on your next adventure ... let's connect at adventurehydro@gmail.com  
                        Also check out my adventures on my YouTube page @adventurehydro</p>
                        </div>
                    </div>
                </div>   
            </Jumbotron>
        </div>   
    );
};

export default contact;




