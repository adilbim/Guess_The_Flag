import React from "react";
import Test from "./test";
import FlagImg from "./flagImg";
import Message from "./message";

class Treatment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "",
      newGame: false,
      message1: "correct!!",
      answer: "",
      message2: "wrong!! try again."
    };
  }
  getImg = img => {
    this.setState({ img });
  };

  getAnswer = answer => {
    if (answer) this.setState({ newGame: answer, message1: "Correct!!" });
    else {
      this.setState({ message1: "Wrong Answer!!", newGame: true });
      console.log("false");
    }
  };

  newGame = () => {
    this.setState({ newGame: false });
    //console.log("newGame 2");
  };
  render() {
    if (this.state.newGame)
      return (
        <div>
          <Message message={this.state.message1} newGame={this.newGame} />
          <FlagImg img={this.state.img} />
        </div>
      );
    else
      return (
        <div>
          <Test changeImg={this.getImg} getAnswer={this.getAnswer} />
          <FlagImg img={this.state.img} />
        </div>
      );
  }
}

export default Treatment;
