import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard/GameCard';
import Info from '../Info/Info';
import "./Body.css";
import logo from '../../web-logo.png';

let newtime = 0;
const Body = () => {
    
    const [games, setgames] = useState([]);// state for game card-----

    const [time, setTime] = useState(0);// state for count time in the sidebar
    
// for card data loading
    useEffect(() => {
        fetch('games.json')
        .then(res => res.json())
        .then(data => setgames(data));
    },[]);

// function for handle time to add in sidebar
    const handleAddToTime = (game) =>{
        newtime = game + newtime;
        setTime(newtime);
    }
    
    return (
        <div className='body-container'>
            <div className='body-wrapper'>
                <div style={{display: 'flex', gap: '5px', alignItems: 'center',marginLeft: '50px'}}>
                <img src={logo} alt="" style={{width: '80px',height: '80px'}}/>
                <h1>Super active football club</h1>
                </div>
                <h4>Select todays game</h4>
                <div className='card-container'>
                {
                    games.map(game => <GameCard key={game.id} game={game} handleAddToTime={handleAddToTime}></GameCard>)
                }
                </div>
            </div>
            
                <Info time={time}></Info>
            
        </div>
    );
};

export default Body;