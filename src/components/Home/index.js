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
    text: "Tech Tesser",
    fontFamily: arrayOfObjects[0].fontFamily,
    fontSize: arrayOfObjects[0].fontSize,
  };

  onChangeColor = (color) => {
    this.setState({ currentColor: color.hex });
  };

  onChangeInput = (event) => {
    this.setState({ text: event.target.value });
  };

  onChangeFontFamily = (event) => {
    this.setState({ fontFamily: event.target.value });
  };

  onChangeFontSize = (event) => {
    const fontValue = parseInt(event.target.value);
    this.setState({ fontSize: fontValue });
  };

  render() {
    const { currentColor, text, fontFamily, fontSize } = this.state;

    const textStyle = {
      color: currentColor,
      fontFamily: fontFamily,
      fontSize: fontSize,
    };

    return (
      <div>
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
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
            >
              <div className="handle" id="text-con">
                <p style={textStyle}>{text}</p>
              </div>
            </Draggable>
          </div>
        </div>
        <div className="head-con">
          <div className="sec-con">
            <p>Change Text</p>
            <input
              type="text"
              placeholder="Enter the text"
              onChange={this.onChangeInput}
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
        </div>

        <SketchPicker
          color={currentColor}
          onChangeComplete={this.onChangeColor}
        />
      </div>
    );
  }
}

export default Home;
