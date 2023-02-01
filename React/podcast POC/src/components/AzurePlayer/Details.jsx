import React from "react";

function Details(props) {
  return (
    <div className="c-player--details">  
      <img src={props.song.imgsrc} width="50" height="50"  /> 
      <div className="c-player-data">
      <h3 className="details-title">{props.song.title}</h3>   
      <p className="details-Descp">{props.song.description}</p>  
      </div>
    </div>
  );
}

export default Details;