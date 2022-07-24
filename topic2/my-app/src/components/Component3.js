import React from "react"

export class Component3 extends React.Component{

    render(){

        console.log(this);
        return(
          <>
            {this.props.titleComponent2den}
          </>
        )
    }


}