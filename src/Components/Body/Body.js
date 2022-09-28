import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard/GameCard';
import "./Body.css";


const Body = () => {
    const [games, setgames] = useState([]);

    useEffect(() => {
        fetch('games.json')
        .then(res => res.json())
        .then(data => setgames(data));
    },[]);
    
    return (
        <div className='body-container'>
            <div className='body-wrapper'>
                <h1>Super active football club</h1>
                <div className='card-container'>
                {
                    games.map(game => <GameCard key={game.id} game={game}></GameCard>)
                }
                </div>
            </div>
            <div className='info-container'>
                <h4>hello from info</h4>
            </div>
        </div>
    );
};

export default Body;