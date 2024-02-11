import { Component } from "react";

import Draggable from "react-draggable";

import "./index.css";

class TextEditor extends Component {
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  handleStart = (e) => {
    console.log(e);
  };

  handleDrag = (e) => {
    console.log(e);
  };

  render() {
    return (
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
            <div className="handle">Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default TextEditor;
