import React from "react"
import { Card } from "./Card";



export class BoxList extends React.Component {
  render() {
    
    let {products} = this.props

    return (
      <div className="row mt-5">
        {products.map(item => <Card key={`card-products-id-${item.id}`} {...item} />)}
        
   
      </div>
    );
  }
}

