import React from 'react';
import {TheCalendar } from '../TheCalendar/Componentss/Calendarr';

/*import logo from '../../assets/logo.svg';*/
import logo from '../../assets/HT.png';
import './Home.css';
import crest from './crest.jpeg';
import eye from './TT1.jpeg';
import mouth from './TT2.jpeg';
import pika from './thetatau-history.jpeg';

function Home() {
    
    return (
    
        <div className="App">
              
            <header className="App-header"> 
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                
            </header>

            <section>
	        <div class="jumbotron" id="homejumbo">
		        <div class="overlay"></div>
  		            <div class="row">
  			            <div class="col-1"></div>
  		            	<div class="col-10">
                          <h1 class="tt_title">Theta<br></br>Tau</h1>
    			            <p class="tt_info">Health and Fitness Chair</p>

                        </div>
    	            </div>
                </div>
            </section>
            <div class="row my-row-spacer-65"></div>
            <div class="container">
                <div class="row justify-content-around my-row">
                    <div class="col-md-3 my-col">
                        <div class="card">
                            <img class="card-img-top" src={mouth} alt="Card image cap" />
                            <div class="card-body">
                                {/*<h5 class="card-title">WE</h5>
                                <p class="card-text">stay</p>*/}
                                {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
                            </div>
                        </div>
                    </div>
                <div class="col-md-3 my-col">
                    <div class="card">
                        <img class="card-img-top" src={crest} alt="Card image cap" />
                        <div class="card-body">
                            {/*<h5 class="card-title">SEE</h5>
                            <p class="card-text">right</p>*/}
                            {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
                        </div>
                    </div>  
                </div>
                <div class="col-md-3 my-col">
                    <div class="card">
                        <img class="card-img-top" src={eye} alt="Card image cap" />
                        <div class="card-body">
                            {/*<h5 class="card-title">YOU</h5>
                            <p class="card-text">there</p>*/}
                            {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
                        </div>
                    </div> 
                </div>
            </div>
            <div class="row my-row-spacer-65"></div>
            {/*<div class="row justify-content-around my-row">
                <div class="col-md-4 d-flex justify-content-center my-col">
                    <div class="row justify-content-center my-row">
                        <h2>Test Title</h2>
                        <div class="row justify-content-center my-row">
                        <div class="col my-col">
                            <p>this is us and we are they. love us as we do ourselves. fear us as the rest of humanity someday will.
                                <br /> Im very tired
                            </p>
                            </div>
                    </div>
                    </div>
                    
                </div>
                <div class="col-md-7 d-flex justify-content-center my-col">
                    <img src={pika} alt="i slep"></img>
                </div>
            </div>*/}
            <div class="row my-row-spacer-65"></div> 
        </div>
        <section class="container-wide">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        {/*<h2 class="bottom-text"> Want to SLEEP? </h2>
                        <p>i sure do</p>*/}
                    </div>
                </div>
            </div>
        </section>
        <div class="row my-row-spacer-100"></div>
    </div>
                    
            
    );
}

export default Home;
