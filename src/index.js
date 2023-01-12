import React from "react";
import { createRoot } from 'react-dom/client';
import Release from "./components/App";
import TopRanker from './components/Chart';
import AllTimer from './components/AllTimeChart'
import Awards from './components/Awards.jsx'
import AllArtistes from './components/AllArtists.jsx'
import NewName from './components/NewArtist.jsx'
import Date from './components/Date'
import NewArtistForm from "./components/AddArtist";




const container = document.getElementById('root');
const root = createRoot(container);
root.render(<div className="parent">
 
 <div className="date">
 <Date />

    </div> 
    <div className="div1">
    <TopRanker />

    </div>
    
     <div className="div5">
     <a href='https://twitter.com/ewurufortune'><i className="fa-brands fa-twitter fa-lg"></i>@FortuneEwuru</a>

    </div>
    <br/>
    <div className="div6">
    <Release />
    <NewArtistForm />

    </div>
    <div className="newname">
    <NewName />
    <br/>
     
    {/* <a href="https://www.buymeacoffee.com/ewurufortune"><img  className ="buymeacoffee" alt="buy me a coffee icon" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=ewurufortune&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a> */}
 

    </div>



</div>);

