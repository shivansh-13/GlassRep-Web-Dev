import React from "react";
/**
 * Input box for sphere and cylinder, '_Inc_' stands
 * for increments of 0.25
 * Setting the prop `axis` to true will force increments of 1
 */
class InputInc extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  state = { number: 0, message: "" };
  onInputChange = (e) => {
    if (this.props.axis) this.checkAxis(e.target.value);
    else this.check25(e.target.value, false);
  };
  onInputBlur = (e) => {
    if (this.props.axis) this.checkAxis(e.target.value);
    else this.check25(e.target.value, true);
  };
  render() {
    return (
      <div className="power-entry__input">
        <input
          ref={this.inputRef}
          min="-20"
          max="20"
          className="power-entry__input__input-box"
          type="number"
          value={this.state.number}
          onChange={this.onInputChange}
          onBlur={this.onInputBlur}
        />
        <div className="power-entry__input__message">{this.state.message}</div>
      </div>
    );
  }
  check25(num, onBlur) {
    // const num = e.target.value;
    if (num < -20 || num > 20) {
      this.setState({ message: "Number has to be between -20 and 20" });
      return;
    }
    if (this.countDecimals(num) === 0) {
      this.setState({ number: num, message: "" });
      return;
    } else {
      const regex = /(\d*\.)|-/gi;
      const decimals = num.toString().replaceAll(regex, "");
      console.log(decimals);
      if (decimals.length === 1) {
        if (onBlur) {
          this.setState({
            number: num,
            message:
              decimals === "5" ? "" : "Number must be a multiple of 0.25",
          });
          this.inputRef.current.classList.add("error");
        } else
          this.setState({
            number: num,
          });
        return;
      } else if (Number(decimals) % 25 === 0) {
        if (decimals.length > 2) {
          this.setState({ message: "" });
          this.inputRef.current.classList.remove("error");
        } else {
          this.setState({ number: num, message: "" });
          this.inputRef.current.classList.remove("error");
        }
      } else {
        this.setError();
      }
    }
  }
  checkAxis(num) {
    if (num < 0 || num > 180) {
      this.inputRef.current.classList.add("error");
      this.setState({ message: "Number must be between 0 and 180" });
      return;
    }
    if (this.countDecimals(num) === 0) {
      this.setState({ number: num, message: "" });
      this.inputRef.current.classList.remove("error");
    } else {
      this.inputRef.current.classList.add("error");
      this.setState({ message: "Only whole number is allowed." });
    }
  }
  countDecimals(value) {
    if (Math.floor(value) !== value) {
      if (value.toString().split(".").length <= 1) return 0;
      return value.toString().split(".")[1].length || 0;
    }
    return 0;
  }
  setError() {
    this.setState({ message: "Number must be a multiple of 0.25" });
    this.inputRef.current.classList.add("error");
  }
}

export default InputInc;
