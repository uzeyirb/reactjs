import { Component, Fragment } from "react";
import { Header } from "../Header/Header";

 class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="bg-warning" style={{ minHeight: "100vh" }}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

export default Layout