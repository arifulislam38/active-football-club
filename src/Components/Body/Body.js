import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard/GameCard';
import Info from '../Info/Info';
import "./Body.css";


const Body = () => {
    const [games, setgames] = useState([]);

    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('games.json')
        .then(res => res.json())
        .then(data => setgames(data));
    },[]);

    const handleAddToTime = () =>{
        console.log('button clicked')
    }
    
    return (
        <div className='body-container'>
            <div className='body-wrapper'>
                <h1>Super active football club</h1>
                <div className='card-container'>
                {
                    games.map(game => <GameCard key={game.id} game={game} handleAddToTime={handleAddToTime}></GameCard>)
                }
                </div>
            </div>
            <div className='info-wrapper'>
                <Info></Info>
            </div>
        </div>
    );
};

export default Body;