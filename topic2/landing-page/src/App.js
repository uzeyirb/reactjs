import { Component, Fragment } from "react";
import { getProducts } from "./api/getProducts";

import "./App.css";
import { BoxList } from "./components/BoxList";
import { Carousel } from "./components/Carousel";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


export default class App extends Component {
  render() {
    
    let data = getProducts();


    return (
      <Fragment>
        <Header isSearchPanel={true}/>
        <Carousel />
        <Container>
          <BoxList products={data} />
        </Container>
        <Footer />
        <Header />
      </Fragment>
    );
  }
} 