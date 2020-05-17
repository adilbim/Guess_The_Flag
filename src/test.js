import React from "react";
//import FlagImg from "./flagImg";

// https://restcountries.eu/rest/v2/all

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCountries: [],
      selectedOption: "",
      fourCountries: [],
      flag: {}
    };
  }

  handleOptionChange = e => {
    this.setState({ selectedOption: e.target.value });
  };

  async componentDidMount() {
    // console.log("from componentDidMount !");

    const dataJson = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await dataJson.json();

    this.setState({ allCountries: data });
    this.fourRandomCountries();

    //console.log("Test");
  }
  fourRandomCountries = () => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      let nbr = Math.floor(Math.random() * 250);
      // console.log("All Countries", this.state.allCountries);
      arr.push({ ...this.state.allCountries[nbr] });
    }
    this.setState({ fourCountries: arr, flag: this.chosenCountry(arr) });
    this.props.changeImg(this.state.flag.flag);
  };

  chosenCountry = arr => {
    let nbr = Math.floor(Math.random() * 4);
    return arr[nbr];
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.selectedOption + " " + this.state.flag.numericCode);
    if (this.state.selectedOption === this.state.flag.numericCode) {
      this.props.getAnswer(true);
      console.log("true");
    } else this.props.getAnswer(false);
  };
  render() {
    // console.log("hello world!");
    if (this.state.fourCountries.length > 0) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {this.state.fourCountries.map((data, indx) => (
              <label key={indx}>
                {data.name}
                <input
                  type="radio"
                  name="option"
                  value={data.numericCode}
                  checked={data.numericCode === this.state.selectedOption}
                  onChange={this.handleOptionChange}
                />
              </label>
            ))}
            <button type="submit">submit</button>
          </form>
          {/* <FlagImg img={this.state.flag} /> */}
        </div>
      );
    }
    return <div>loading...</div>;
  }
}

export default Test;
