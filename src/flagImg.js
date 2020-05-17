import React from "react";

class FlagImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: ""
    };
  }

  changeImg = e => {
    this.setState({ img: e });
  };

  render() {
    //this.setState({img: this.props.img})
    //this.changeImg("https://restcountries.eu/data/afg.svg");
    let img = "";
    img = this.props.img;
    let show = "loading...";
    //if (img.length > 0) {
    show = <img alt={img} src={img} />;
    //  }
    return <div>{show}</div>;
  }
}

export default FlagImg;
