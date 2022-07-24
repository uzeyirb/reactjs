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

export default Box;