import React from "react";
import "./CharacterCard.css";
// import characters from "../../characters.json";

const FriendCard = props => (
<div className="border">
  <img className="card-img-bottom" src={props.image} alt="character images" onClick={() => props.shuffleCharacters()}/>
</div>
);

export default FriendCard;
