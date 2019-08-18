import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container, Grid } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';


const CharacterList= function() {
    const [characters, setCharacters] = useState([]);//state set

    //Effect Hook
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`, {
            params: {}//optional parameters
        })
        .then((response) => {
            const chars = response.data.results;
            setCharacters(chars)//update state to SWAPI people
            return chars;
        })

        .catch(err => {
            console.log(err);
        })

        
    }, [])//useEffect() 

    if(!characters){
        return <h1>Loading... </h1>
    }

    return (
        <Container text>
         <Grid relaxed columns={3} divided="vertically">
         <Grid.Row padded="vertically" columns={3}>
        {characters.map( character => {
             return(
            <CharacterCard
            name={character.name}            
            birthyear={character.birth_year}
            height={character.height}
            home={character.homeworld}
            />
            )
        })}
        </Grid.Row>
        </Grid>
        </Container>
   )//return statement
};//CharacterList

export default CharacterList;
