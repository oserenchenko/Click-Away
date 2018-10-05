import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
// import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };


  shuffleCharacters = () => {
    var currentIndex = characters.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = characters[currentIndex];
      characters[currentIndex] = characters[randomIndex];
      characters[randomIndex] = temporaryValue;
    }
  
    this.setState({ characters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Nav> </Nav>
      <Wrapper>
        {this.state.characters.map(character => (
          <CharacterCard
            shuffleCharacters={this.shuffleCharacters}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

