import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { CardItem as Card} from "../components/Card";
import axios from 'axios';
 
class HomeContainer extends Component {

constructor(props){
    super(props);
    this.state = {
        movies: [],
    };
}

componentDidMount(){
    this.getMovies();

}

getMovies(){
    axios.get("http://www.omdbapi.com/?apikey=fcda808a&s=series")
    .then(({data: {Search}}) => {
        console.log(Search);
        console.log({data: {Search}});
        this.setState({movies: Search});
    });
}

  render() {
    return (
      <Row container spacing={2}>
        {
            this.state.movies.map((movie) => (
                <Col key={movie.imdbID}>
                <Card {...movie}/>
              </Col>  
            ))
        }
       
      </Row>
    );
  }
}

export default HomeContainer