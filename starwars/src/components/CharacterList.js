import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {CharacterCard, PlanetCard} from './CharacterCard';
import { Container, Grid } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';


const CharacterList= function() {
    const [characters, setCharacters] = useState([]);//state set
    // const [homeworlds, setHomeworlds] = useState([]);
    // const [run, setRun ] = useState(true);
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
        // .then((response) => {
        //         let planetArray = [];
        //         response.forEach((planet) => {
        //         axios.get(planet.homeworld)
        //         .then((response) => {
        //              planetArray.push(response.data.name)
        //             setHomeworlds(planetArray)
        //             return planetArray;
        //         })
        //         return planetArray
        //     })
        //     setHomeworlds(planetArray)
            
        //     return planetArray
            
        // })
        .catch(err => {
            console.log(err);
        })

        
    }, [])//useEffect()

    //return callback function

    if(!characters){
        return <h1>Loading... </h1>
    }
    // setRun(false);
// console.log(homeworlds)
    return ([
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
        </Container>,
        <div>

</div>,

    <Container>
        {/* {   homeworlds.map( planet => { 
            console.log(planet)
            return(
            <PlanetCard
            // home={planet}
            />
            )
        })
        } */
        
        <PlanetCard/>}
    </Container>

    ])
};//CharacterList

export default CharacterList;
