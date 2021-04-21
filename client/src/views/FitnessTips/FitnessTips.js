import React from 'react';


/*import logo from '../../assets/logo.svg';*/
import logo from '../../assets/HT.png';
import water from './hydrationIsKey.jpeg';
import sleep from './doggysleep.jpeg';
import protein from './GAINS.jpg';
import './FitnessTips.css';

function FitnessTips() {
    
    return (
        
        
        <div className="App">
            <header className="App-header"> 
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
            </header>
            
            <div class="container">
             <div class="row my-row-spacer-30"></div>
                <div class="row justify-content-center fit-row">
                    <h1>Da Fitness Page</h1>
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
                                        Don't forget to drink water! Dehydration can cause your body to stop functioning at its fullest, making you lose strength and miss out on your gains!
                                    </div>
                                    <img class="card-img-top" src={water} alt="Card image cap" />
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
                                        Sleep is very important! When you're asleep is when your body heals your torn muscle fibers the most. If you don't sleep your body won't heal as well and you'll be killing your gains!
                                    </div>
                                    <img class="card-img-top" src={sleep} alt="Card image cap" />
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
                                        Eat lots of protein to max out those GAINS!
                                    </div>
                                    <img class="card-img-top" src={protein} alt="Card image cap" />
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

export default FitnessTips;


/* <div class="description">
            <h2>Fitness Tippies</h2>
            <p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis. Suspendisse consectetur mi id libero fringilla, in pharetra sem ullamcorper.
            </p>
            <p>    
                - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis. Suspendisse consectetur mi id libero fringilla, in pharetra sem ullamcorper.
                </p>
                <p>
                -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis. Suspendisse consectetur mi id libero fringilla, in pharetra sem ullamcorper.

            </p>
        </div>
        */