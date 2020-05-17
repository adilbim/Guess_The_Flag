import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  handleClick = () => {
    this.props.newGame();
    //console.log("new Game!");
  };

  render() {
    return (
      <div>
        <span>{this.props.message}</span>
        <button onClick={this.handleClick}>NewG Game</button>
      </div>
    );
  }
}

export default Message;
