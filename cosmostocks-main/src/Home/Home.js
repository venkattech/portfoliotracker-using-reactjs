import React from 'react';
import Search from '../Search/Search';
//import PropTypes from 'prop-types'
import pic from './stocks.jpg';

const Home =()=>{
    return(
        <div>
          <div style={{height:"300px",backgroundColor:"lightblue",border:"1px solid #333"}}>
          <h1 style={{color:"black",fontFamily:"monospace"}}>COSMOSTOCKS</h1>
          <img src={pic} alt='NO IMAGE'></img>
          
          </div>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div >
                <div>
                    <h4 style={{color:"black",fontFamily:"monospace"}}>Watchlist</h4> 
                </div>
                <div style={{color:"black",fontFamily:"monospace" ,padding:"10px 200px" ,textalign:"center"}}>
                    The world of finace is volatile.<br/>
                    Every few seconds could see a major change in every stock's fate.<br/>CosmoStocks, powered by Alpha Vantage, helps
                    you search your favourite stocks and keep an eye out on its minute-by-minute changes.<br/>
                    Find your favourite stock by entering its symbol or a character in the inout box below.
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <Search></Search>
                </div>
            </div>
            


          </div>

        </div>
    );
};

//Home.PropTypes = {};

export default Home;