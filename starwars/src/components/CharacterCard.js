import React, { useState } from 'react';
import { Card, Grid, CardContent } from 'semantic-ui-react';
import axios from 'axios';

const CharacterCard = props => {
 const [planet, setPlanet] = useState()


    axios.get(`${props.home}`)
    .then((response, planet)=> {
        console.log(response.data.name)
        setPlanet(response.data.name)
        
    })

    if(!planet){
        return null;
    }

    return (
        
    <Grid.Column padded="horizontally" key={props.id}>
        <Card>
            <Card.Content>
                <Card.Header>Name: {props.name}</Card.Header>

                <Card.Description>
                {/* {props.home} */}
                <Card.Meta>Birth year: {props.birthyear}</Card.Meta>
                Height: {props.height}cm.<br/>
                Home: {planet}
                </Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>

    );
};



const PlanetCard = props => {
    return(
        
    <Card>
        <CardContent>
            Home: {props.home}
        </CardContent>
    </Card>
    )
}
export {PlanetCard, CharacterCard}