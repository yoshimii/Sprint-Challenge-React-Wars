import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList= function() {
    const [character, setCharacters] = useState([]);//state set

    //Effect Hook
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`, {
            params: {}//optional parameters
        })
        .then((response)=> {
            const character = response.data.results;
            setCharacters(character);//update state to SWAPI people
            console.log(character)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])//useEffect()

    //return callback function

    return (
        <CharacterCard
        name={character.name}
        />
    )
};//CharacterList

export default CharacterList;
