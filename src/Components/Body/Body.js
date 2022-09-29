import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard/GameCard';
import Info from '../Info/Info';
import "./Body.css";
import { addToLocal ,getLocalStorage } from '../../localStorage/localStorage';

let newtime = 0;
const Body = () => {
    
    const [games, setgames] = useState([]);

    const [time, setTime] = useState(0);
    console.log(time);
    
   
    // console.log(newtime);

    useEffect(() => {
        fetch('games.json')
        .then(res => res.json())
        .then(data => setgames(data));
    },[]);


    // useEffect(() =>{
        
    //     console.log(storedlocaldb);

    //     // for(const id in storedlocaldb){
    //     //     setTime(id);
    //     // }
    // },[])

    const handleAddToTime = (game) =>{
        newtime = game + newtime;
        setTime(newtime);

        // addToLocal(game);

        // const storedlocaldb = getLocalStorage();
        //     setTime(storedlocaldb);
        // for(const id in storedlocaldb){
        //     setTime(id);
        //     console.log(setTime)
        
        // setTime(game);
        // setgames(game);
    }
    
    return (
        <div className='body-container'>
            <div className='body-wrapper'>
                <h1>Super active football club</h1>
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