import React from "react";
import cardStyle from "./card.module.css";

export class Card extends React.Component {
  render() {
    let inlineStyle = {
      width: "18rem",
    };

    console.log(this.props);
    let {title, desc, image_url} = this.props

    return (
      <div className={`col-md-3 ${cardStyle.card_black}`}>
        <div className="card mb-5" >
          <img
            src={image_url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {desc}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}