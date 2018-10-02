import React from "react";
import "./CharacterCard.css";

const FriendCard = props => (
<div className="border">
  <img className="card-img-bottom" src={props.image} alt="character images"/>
</div>
);

export default FriendCard;
