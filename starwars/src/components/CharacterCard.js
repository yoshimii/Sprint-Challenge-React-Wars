import React from 'react';

const CharacterCard = props => {
    
    return (

        <div>
            <div>{props.name}</div>
            <div>{props.birthyear}</div>
            <div>{props.home}</div>
        </div>

    );
};

export default CharacterCard;