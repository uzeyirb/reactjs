import React from "react";
import Card from "./Card";

export default class Box extends React.Component {
  render() {


    return (
      <div>
        <h1>Salam</h1>
    
        {this.props.data.place.map((place, index ) => (<Card key={`card-${index}`} place={place} />))}
      </div>
    );
  }
}
