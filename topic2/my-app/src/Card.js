import React from "react";

export default class Card extends React.Component{


    render(){
        return(
            <div>
                {this.props.user.name} - {this.props.user.age}
            </div>
        )
    }
}