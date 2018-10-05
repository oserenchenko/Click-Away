import React from "react";
import "./CharacterCard.css";

const FriendCard = (props) => (
    <div className="border">
      <img className="card-img" id={props.id} clicked={props.clicked} src={props.image} name={props.name} alt="character images" onClick={(e) => props.clickChange(e)}/>
    </div>
);

export default FriendCard;
