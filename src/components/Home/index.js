import { Component } from "react";

import { SketchPicker } from "react-color";
import Draggable from "react-draggable";

import "./index.css";

const arrayOfObjects = [
  {
    id: 1,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "black",
  },

  {
    id: 2,
    fontFamily: "Arial",
    fontSize: 20,
  },
  {
    id: 3,
    fontFamily: "cursive",
    fontSize: 25,
  },
  {
    id: 4,
    fontFamily: "fantasy",
    fontSize: 30,
  },
];

class Home extends Component {
  state = {
    currentColor: "#fff",
    text1: "Tech Tesser",
    text2: "Looking for internships",
    text3: "I am doing",
    fontFamily: arrayOfObjects[0].fontFamily,
    fontSize: arrayOfObjects[0].fontSize,
    selectedText: null,
  };

  onChangeColor = (color) => {
    this.setState({ currentColor: color.hex });
  };

  onChangeInput = (event) => {
    const { selectedText } = this.state;
    this.setState({ [selectedText]: event.target.value });
  };

  onChangeFontFamily = (event) => {
    this.setState({ fontFamily: event.target.value });
  };

  onChangeFontSize = (event) => {
    const fontValue = parseInt(event.target.value);
    this.setState({ fontSize: fontValue });
  };

  handleStart = (e, data, textId) => {
    this.setState({ selectedText: textId });
  };

  render() {
    const {
      currentColor,
      text1,
      text2,
      selectedText,
      fontFamily,
      fontSize,
    } = this.state;

    const textStyle1 = {
      color: currentColor,
      fontFamily: fontFamily,
      fontSize: fontSize,
    };

    const textStyle2 = {
      color: currentColor,
      fontFamily: fontFamily,
      fontSize: fontSize,
    };

    return (
      <div className="con">
        <div className="fir-con">
          <div className="container">
            <Draggable
              axis="both"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
              bounds="parent"
              onStart={(e, data) => this.handleStart(e, data, "text1")}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
            >
              <div className="handle" id="text-con">
                <p style={selectedText === "text1" ? textStyle1 : null}>
                  {text1}
                </p>
              </div>
            </Draggable>
          </div>
          <div className="container">
            <Draggable
              axis="both"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
              bounds="parent"
              onStart={(e, data) => this.handleStart(e, data, "text2")}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
            >
              <div className="handle" id="text-con">
                <p style={selectedText === "text2" ? textStyle2 : null}>
                  {text2}
                </p>
              </div>
            </Draggable>
          </div>
        </div>
        <div className="sec-con">
          <div className="input-con">
            <p>Change Text: </p>
            <input
              type="text"
              placeholder="Enter the text"
              onChange={this.onChangeInput}
              className="input"
              value={selectedText === "text1" ? text1 : text2}
            />
          </div>

          <div className="select-containers">
            <label htmlFor="font-family">Font Family :</label>
            <select onChange={this.onChangeFontFamily} id="font-family">
              {arrayOfObjects.map((each) => (
                <option value={each.fontFamily} key={each.id}>
                  {each.fontFamily}
                </option>
              ))}
            </select>
          </div>
          <div className="select-containers">
            <label htmlFor="font-size">Font Size :</label>
            <select onChange={this.onChangeFontSize} id="font-size">
              {arrayOfObjects.map((each) => (
                <option value={each.fontSize} key={each.id}>
                  {each.fontSize}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <p>color :</p>
            <SketchPicker
              color={currentColor}
              onChangeComplete={this.onChangeColor}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
