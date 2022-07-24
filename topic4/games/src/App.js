import { Component } from "react";
import { images } from "./constant/images";
import "./style/App.css";
import Heros from "./constant/hero.json";
import { PlayerContent } from "./PlayerContent";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // firstDice: {},
      // secondDice: {},
      heros: Heros.heros,
      team1: [],
      team2: [],
    };
  }

  // randomAttack() {
  //   let randomFirst = Math.floor(Math.random() * 6);
  //   let randomSecond = Math.floor(Math.random() * 6);

  //   this.setState({
  //     firstDice: { images: images[`dice${randomFirst}`], power: randomFirst },
  //     secondDice: {
  //       images: images[`dice${randomSecond}`],
  //       power: randomSecond,
  //     },
  //   });

  //   console.log(images[`dice${randomFirst}`]);
  //   console.log(images[`dice${randomSecond}`]);
  //   console.log("randomFirst", randomFirst);
  //   console.log("randomSecond", randomSecond);
  // }

  startAttack() {
    console.log(this.state.heros);

    let randomTeam1 = [];
    let randomTeam2 = [...this.state.heros];

    while (randomTeam1.length < randomTeam2.length) {
      let randomNum = Math.floor(Math.random() * randomTeam2.length);

      let randomDeletePlayer = randomTeam2.splice(randomNum, 1)[0];

      randomTeam1 = [...randomTeam1, randomDeletePlayer];

      console.log(randomTeam1, "randomTeam1");
      console.log(randomTeam2, "randomTeam2");

      this.setState({ team1: randomTeam1, team2: randomTeam2 });
    }
  }

  render() {
    let teamPoint1 = this.state.team1.reduce(
      (sum, hero) => sum + hero.power,
      0
    );
    let teamPoint2 = this.state.team2.reduce(
      (sum, hero) => sum + hero.power,
      0
    );
    return (
      <div className="App">
        <button onClick={() => this.startAttack()}>Attack</button>

        <PlayerContent
          text={teamPoint1 > teamPoint2 ? "Winner" : "Lost"}
          point={teamPoint1}
          data={this.state.team1}
        />

        <br />
        <br />

        <PlayerContent
          text={teamPoint1 < teamPoint2 ? "Winner" : "Lost"}
          point={teamPoint2}
          data={this.state.team2}
        />
        <br />
        <br />

        {/* 
        <h1>
          Team-Dice First:
          {this.state.firstDice.power > this.state.secondDice.power
            ? "Winner"
            : "Lost"}
        </h1>

        <h1>
          Team-Dice Second:
          {this.state.firstDice.power < this.state.secondDice.power
            ? "Winner"
            : "Lost"}
        </h1>
        <img src={this.state.firstDice.images} width="200" alt="" />
        <br />
        <img src={this.state.secondDice.images} width="200" alt="" />

        <button onClick={() => this.randomAttack()}>Shake Dice</button> */}
      </div>
    );
  }
}

export default App;
