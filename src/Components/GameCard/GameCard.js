import React from 'react';
import './gamecard.css'

const GameCard = ({game, handleAddToTime}) => {
    const {img, name, description, time, age} = game;
    return (
        <div className='game-card'>
            <img src={img} alt="this is an imag" />
            <h3>{name}</h3>
            <p>{description.length > 110? description.slice(0,110) + `....` : description}</p>
            <p>For age: {age}</p>
            <p><small>Time Required: {time}s</small></p>
            <button onClick={() => handleAddToTime(time)}>Add to List</button>
        </div>
    );
};

export default GameCard;