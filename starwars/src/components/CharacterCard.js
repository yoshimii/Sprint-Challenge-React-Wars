import React from 'react';

const CharacterCard = props => {
    
    return (

        <div>
            <div>{props.name}</div>
            <div>{props.height} cm.</div>
            <div>{props.birthyear}</div>
            
        </div>

    );
};

export default CharacterCard;