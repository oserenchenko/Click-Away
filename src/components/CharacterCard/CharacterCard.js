import React, { Component } from "react";
import "./CharacterCard.css";

class FriendCard extends Component {
  state = {
    "click": false
  }

  handleClickChange = () => {
    if (this.state.click === false) {
      this.setState({ click : true});
    } else {
      console.log("you lost!");
    }
    
    this.props.shuffleCharacters();
  }


  render() {
    return (
    <div className="border">
      <img className="card-img-bottom" src={this.props.image} alt="character images" onClick={() => this.handleClickChange()}/>
    </div>
    )
  };

  }

export default FriendCard;
