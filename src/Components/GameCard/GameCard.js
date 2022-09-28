import React from 'react';
import './gamecard.css'

const GameCard = (props) => {
    const {img, name, description, time, age} = props.game;

    return (
        <div className='game-card'>
            <img src={img} alt="this is an imag" />
            <h3>{name}</h3>
            <p>{description.length > 130? description.slice(0,130) : description}</p>
            <p>For age: {age}</p>
            <p><small>Time Required: {time}</small></p>
            <button>Add to List</button>
        </div>
    );
};

export default GameCard;