import { Component } from "react";
import axios from "axios";

export class CardGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckId: "",
      gameOver: false,
      cards: [],
    };
  }

  componentDidMount() {
    //{ "success": true, "deck_id": "3p40paa87x90", "shuffled": true, "remaining": 52}
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/")
      .then(({ data }) => {
        this.setState({
          deckId: data.deck_id,
        });
      });
    this.giveMeACard = this.giveMeACard.bind(this);
  }

  giveMeACard() {
    /**
     {
  "success": true,
  "deck_id": "2iex7bw6bzjx",
  "cards": [
    {
      "code": "KC",
      "image": "https://deckofcardsapi.com/static/img/KC.png",
      "images": {
        "svg": "https://deckofcardsapi.com/static/img/KC.svg",
        "png": "https://deckofcardsapi.com/static/img/KC.png"
      },
      "value": "KING",
      "suit": "CLUBS"
    }
  ],
  "remaining": 49
}
     */
    axios
      .get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`
      )
      .then(({ data }) => {
        if (!data.success) {
          this.setState({
            gameOver: true,
          });
        } else {
          const card = data.cards[0].image;
          const cards = [...this.state.cards];
          cards.push(card);
          this.setState({
            cards: cards,
          });
        }
      });
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={this.giveMeACard}>Give me A Card!</button>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {this.state.cards.map((card) => {
            return <img src={card} key={card} style={{ width: 100 }} />;
          })}
        </div>
      </div>
    );
  }
}
