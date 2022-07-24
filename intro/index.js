class Box extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let a = 100;

        return (
            <div>
                {this.props.children}
                <h1>Box - {a}</h1>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props)
    }

render(){

    console.log("React indexin thisi: " , this);

    return(
        <div>
            <Box/>
            <Box/>
            <Box/>
            {this.props.children}
            <h1>Uzik React</h1>
            <span>test</span>
        </div>
    )
}




}




ReactDOM.render(<App><h1>Salam</h1><h1>Sagol</h1></App>, document.getElementById("root"));
