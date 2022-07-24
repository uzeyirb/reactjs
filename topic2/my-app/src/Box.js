import React from "react";
import Card from "./Card";
class Box extends React.Component {
  render() {

    console.log(this.props);
    return (
      <>
        <p>
          {this.props.title} {this.props.age}
        </p>
        {this.props.data.users.map((user, index) => (
          <Card key={`card-${index}`} user={user} />
        ))}
      </>
    );
  }
}

export default Box;
