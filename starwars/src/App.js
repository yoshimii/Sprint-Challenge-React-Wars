import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import { createGlobalStyle } from 'styled-components'
import { PlanetCard } from './components/CharacterCard';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(https://i.imgur.com/UvVQaf6.jpg) !important;
  }

`
  return (
    <div className="App">
      <GlobalStyle/>
      <h1 className="Header">React Wars</h1>
      <CharacterList/>
    </div>
  );
}

export default App;
