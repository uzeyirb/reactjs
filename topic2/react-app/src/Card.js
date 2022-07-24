import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div>
        {this.props.place.city} - {this.props.place.name}
      </div>
    );
  }
}
