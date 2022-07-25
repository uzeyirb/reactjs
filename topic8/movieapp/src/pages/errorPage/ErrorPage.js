import { Component } from "react";

class ErrorPage extends Component{

constructor(){
    super()
    this.onBack = this.onBack.bind(this);
}

onBack = () => {
this.props.history.goBack();

}

render(){

    return (
        <>
        <h1>Page not found error</h1>
        </>
    )
}

}

export default ErrorPage