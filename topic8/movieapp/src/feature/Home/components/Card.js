import { Component } from "react";
import { Card, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


export class CardItem extends Component {
  render() {

    const {Poster, Title, Type, Year} = this.props;

    return (
        <Card style={{ width: '18rem', margin:"10px" }}>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
      
          </Card.Text>
          <Card.Text>
          {Year}
          </Card.Text>
          <Link to={`/movie/slug=${Title}`} className="btn btn-info w-100"> Watch</Link>
        </Card.Body>
      </Card>
    );
  }
}
