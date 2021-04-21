import React from 'react';


/*import logo from '../../assets/logo.svg';*/

import './Workouts.css';
//import {Forum} from './Forum/forum'

function Workouts() {
    
    return (
        
        
        <div className="App">
            <header className="App-header"> 
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
            </header>
            
            <div class="container">
             <div class="row my-row-spacer-30"></div>
                <div class="row justify-content-center fit-row">
                    <h1>Workouts</h1>
                </div>
                <div class="row fit-row">
                    <div class="col d-flex justify-content-center fit-col">
                        <div>Here you can find what we consider to be the most important tips for staying strong and healthy!</div>
                    </div>
                </div>
                <div class="row my-row-spacer-65"></div>
                <div class="row fit-row">
                    <div class="col-md-4 fit-col">
                        <div class="row justify-content-center fit-row">
                            <h3>Tip1</h3>
                            <div class="row justify-content-center fit-row">
                                <div class="col fit-col">
                                    <div>
                                        Find healthy foods you really enjoy, so it's not a chore!
                                    </div>
                                    {/*<img class="card-img-top" src={froot} alt="Card image cap" />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 fit-col">
                        <div class="row justify-content-center fit-row">
                            <h3>Tip2</h3>
                            <div class="row justify-content-center fit-row">
                                <div class="col fit-col">
                                    <div>
                                        Water is super important! It keeps you full and hydrated! It's also super for your skin!
                                    </div>
                                    {/*<img class="card-img-top" src={watta} alt="Card image cap" />*/}
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div class="col-md-4 fit-col">
                        <div class="row justify-content-center fit-row">
                            <h3>Tip3</h3>
                            <div class="row justify-content-center fit-row">
                                <div class="col fit-col">
                                    <div>
                                        Make sure you take your vitamins. Vitamins boost your immune system and prevent you from getting sick.
                                    </div>
                                    {/*<img class="card-img-top" src={pillz} alt="Card image cap" />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-row-spacer-100"></div>
                <div class="container-fluid w-100">
                    <div class="row fit-row">
                        <div class="col d-flex justify-content-left fit-col">
                            <h2>Resources</h2>
                        </div>
                    </div>
                    <div class="row fit-row">
                        <div class="col d-flex justify-content-left fit-col">
                            <ul>
                                <li>Link to something (nutrition ideas?)</li>
                                <li>Idk, link to something else lol</li>
                                <li>some other third thing</li>
                                <div>maybe we could fuse the health tips below this? Idk what we're doing with them</div>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    );
}

export default Workouts;
