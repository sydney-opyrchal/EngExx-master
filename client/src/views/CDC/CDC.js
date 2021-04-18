import React from 'react';


/*import logo from '../../assets/logo.svg';*/
import logo from '../../assets/HT.png';
import TwitterContainer from './twitterhelper'
import './CDC.css';

function CDC() {
    
    return (

        <div className="App">

            <header className="App-header"> 
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a> 
            </header>
            
            <h1>CDC Guidelines</h1>

        <div class="description">
            <h2>CDC Twitter</h2>
            <p> 
                <a href="https://twitter.com/CDCgov">Please click here to stay up to date!</a>
            </p>
            <div><a class="twitter-timeline" data-width="300" data-height="500" href="https://twitter.com/CDCgov?ref_src=twsrc%5Etfw">Tweets by CDCgov</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>
            
            <TwitterContainer
            class="twitter-timeline"
            data-theme="dark"
            data-tweet-limit="5"
            data-chrome="noheader nofooter noborders"
            href="https://twitter.com/CDCgov"
            />
        </div>

    </div> 
    );
}

export default CDC;
