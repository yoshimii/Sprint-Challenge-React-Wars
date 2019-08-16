import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList= function() {
    const [characters, setCharacters] = useState([]);//state set
    //Effect Hook
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`, {
            params: {}//optional parameters
        })
        .then((response)=> {
            const characters = response.data.results;
            setCharacters(characters);//update state to SWAPI people
            return characters;
        })
        .catch(err => {
            console.log(err);
        })

        
    }, [])//useEffect()

    //return callback function

    return (
        <div>
        {characters.map( character => {
            return(
            <CharacterCard
            name={character.name}            
            birthyear={character.birth_year}
            height={character.height}
            />
            )
        })}
        </div>
    )
};//CharacterList

export default CharacterList;
