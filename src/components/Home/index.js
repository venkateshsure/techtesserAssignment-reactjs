import { Component } from "react";

import { SketchPicker } from "react-color";
import Draggable from "react-draggable";

import "./index.css";

class Home extends Component {
  state = { currentColor: "#fff", text: "Tech Tesser" };

  onChangeColor = (color) => {
    this.setState({ currentColor: color.hex });
  };

  onChangeInput = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { currentColor, text } = this.state;

    const textStyle = {
      color: currentColor,
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
