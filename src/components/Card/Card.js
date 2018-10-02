import React from 'react';
import rioGrand from '../../assets/images/Water-Rio-Grande.jpg';
import vegetation from '../../assets/images/vegetation.jpg';
import download from '../../assets/images/download1.jpg';

const card = (props) => {
    return (
        <div className="container">
            <div className='row'>
                <div className="card-deck">
                    <div className="card text-white bg-black border-primary">
                        <img className="card-img-top" src={download} alt="Cardcap"/>
                        <div className="card-body">
                        <h5 className="card-title">Forests and Water</h5>
                        <p className="card-text">The availability and quality of water in many regions of the world are more and more threatened by overuse, misuse and pollution, and it is increasingly recognized that both are strongly influenced by forests. </p>
                        </div>
                        <button type="button" className="btn btn-primary btn-block">Watch Now</button>
                    </div>
                    <div className="card text-white bg-black border-primary">
                        <img className="card-img-top" src={rioGrand} alt="Cardcap" />
                        <div className="card-body">
                        <h5 className="card-title">Rio Grande</h5>
                        <p className="card-text">Known as the Rio Grande in the United States and as the Río Bravo del Norte in Mexico. It is the fourth longest river system in the United States at 1,885 miles in length.</p>
                        
                        </div>
                        <button type="button" className="btn btn-primary btn-block">Watch Now</button>
                    </div>
                    <div className="card text-white bg-black border-primary">
                        <img className="card-img-top" src={vegetation} alt="Cardcap"/>
                        <div className="card-body">
                        <h5 className="card-title">Another Video</h5>
                        <p className="card-text">row scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl.</p>
                        
                        </div>
                        <button type="button" className="btn btn-primary btn-block">Watch Now</button>
                    </div>
                </div>
            </div>
            <p></p>
            <div className='row'>
                <div className="card-deck">
                    <div className="card text-white bg-black border-primary">
                        <img className="card-img-top" src={download} alt="Cardcap"/>
                        <div className="card-body">
                        <h5 className="card-title">Forests and Water</h5>
                        <p className="card-text">The availability and quality of water in many regions of the world are more and more threatened by overuse, misuse and pollution, and it is increasingly recognized that both are strongly influenced by forests. </p>
                        </div>
                        <button type="button" className="btn btn-primary btn-block">Watch Now</button>
                    </div>
                    <div className="card text-white bg-black border-primary">
                        <img className="card-img-top" src={rioGrand} alt="Cardcap" />
                        <div className="card-body">
                        <h5 className="card-title">Rio Grande</h5>
                        <p className="card-text">Known as the Rio Grande in the United States and as the Río Bravo del Norte in Mexico. It is the fourth longest river system in the United States at 1,885 miles in length.</p>
                        
                        </div>
                        <button type="button" className="btn btn-primary btn-block">Watch Now</button>
                    </div>
                    <div className="card text-white bg-black border-primary">
                        <img className="card-img-top" src={vegetation} alt="Cardcap"/>
                        <div className="card-body">
                        <h5 className="card-title">Another Video</h5>
                        <p className="card-text">row scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl.</p>
                        
                        </div>
                        <button type="button" className="btn btn-primary btn-block">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default card;