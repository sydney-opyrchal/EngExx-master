import React from 'react';


/*import logo from '../../assets/logo.svg';*/
import logo from '../../assets/HT.png';
import sportsppl from './softball_bros.jpeg'
import cooldudes from './TT2.jpeg'
/*import sportsppl from './sports_folks.jpg'
import cooldudes from './running_dudes.jpg'*/
import './Teams.css';

function Teams() {
    
    return (
        <div className="App">
            <header className="App-header"> 
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a> 
            </header>

            <div class="container">
                <div class="row my-row-spacer-65"></div>
                <div class="row my-row">
                    <div class="col d-flex justify-content-center my-col">
                        <div class="description">
                            <h2>Meet our teams!</h2>
                        </div>
                    </div>
                </div>
                <div class="row my-row">
                    <div class="col d-flex justify-content-left my-col">
                        <div>
                            <div> Our teams are super cool and dope and stuff blah blah blah</div>
                            <div> The teams are listed below with their members and total number of points for this semester(?)</div>
                            <div> This is reasonable temp description so that I can guage the necessary width of the container. Also the pictures below are temporary and 100% copywritten</div>
                        </div>
                    </div>
                </div>
                <div class="row my-row-spacer-65"></div>
            </div>
            <div class="container features">
                <div class="row my-row">
                    <div class="col d-flex justify-content-center my-col">
                        <h2>Teams</h2> 
                    </div>
                </div>
                <div class="row my-row-spacer-30"></div>
                <div class="row justify-content-between my-row">
                    <div class="col-lg-2 col-md-2 col-sm-12 my-col">
                        <h3 class="feature-title">Team 1</h3>
                        {/*<img src="images/column-1.jpg" class="img-fluid">*/}
                        <p>Team Member 1</p>
                        <p>Team Member 2</p>
                        <p>Team Member 3</p>
                        <p>Team Member 4</p>
                        <p>Team Member 5</p>
                        <p>Team Member 6</p>
                        <p>Team Member 7</p>
                        <p>Total: </p>
                    </div>
            
                    <div class="col-lg-2 col-md-2 col-sm-12 my-col">
                        <h3 class="feature-title">Team 2</h3>
                        {/*<img src="images/column-2.jpg" class="img-fluid">*/}
                        <p>Team Member 1</p>
                        <p>Team Member 2</p>
                        <p>Team Member 3</p>
                        <p>Team Member 4</p>
                        <p>Team Member 5</p>
                        <p>Team Member 6</p>
                        <p>Team Member 7</p>
                        <p>Total: </p>
                    </div>
                
                    <div class="col-lg-2 col-md-2 col-sm-12 my-col">
                        <h3 class="feature-title">Team 3</h3>
                            {/*<img src="images/column-2.jpg" class="img-fluid">*/}
                            <p>Team Member 1</p>
                            <p>Team Member 2</p>
                            <p>Team Member 3</p>
                            <p>Team Member 4</p>
                            <p>Team Member 5</p>
                            <p>Team Member 6</p>
                            <p>Team Member 7</p>
                            <p>Total: </p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12 my-col">
                        <h3 class="feature-title">Team 4</h3>
                            {/*<img src="images/column-2.jpg" class="img-fluid">*/}
                            <p>Team Member 1</p>
                            <p>Team Member 2</p>
                            <p>Team Member 3</p>
                            <p>Team Member 4</p>
                            <p>Team Member 5</p>
                            <p>Team Member 6</p>
                            <p>Team Member 7</p>
                            <p>Total: </p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12 my-col">
                        <h3 class="feature-title">Team 5</h3>
                            {/*<img src="images/column-2.jpg" class="img-fluid">*/}
                            <p>Team Member 1</p>
                            <p>Team Member 2</p>
                            <p>Team Member 3</p>
                            <p>Team Member 4</p>
                            <p>Team Member 5</p>
                            <p>Team Member 6</p>
                            <p>Team Member 7</p>
                            <p>Total: </p>
                    </div>
                </div>
                <div class="row my-row-spacer-100"></div>
            </div>
            <div class="container-fluid">
                <div class="row my-row">
                    <div class="col col-md-6 justify-content-center my-col">
                        <img width="450" src={sportsppl} alt="Cool sports people have fun"></img>
                    </div>
                    <div class="col col-md-6 justify-content-center my-col">
                        <img width="450" src={cooldudes} alt="Cool sports people have fun"></img>
                    </div>
                </div>
                <div class="row my-row-spacer-100"></div>
            </div>
        </div> 
    );
}

export default Teams;
