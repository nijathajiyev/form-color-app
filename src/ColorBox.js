import React, { Component } from "react";
import { Card } from "./Card";

export class ColorBox extends Component {
  constructor() {
    super();

    this.widthRef = React.createRef();
    this.heightRef = React.createRef();
    this.colorRef = React.createRef();

    this.state = {
      arr: [],
    };
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    let width = this.widthRef.current.value;
    let height = this.heightRef.current.value;
    let color = this.colorRef.current.value;

    let arr = [...this.state.arr];
    arr.push({
      width,
      height,
      color,
    });

    this.setState({ arr });
  }

  deleteButton(id) {
    let arr = [...this.state.arr];
    arr.splice(id, 1);
    this.setState({ arr });
  }

  render() {
    return (
      <div>
        <h1>Color Box</h1>
        <label>Width: </label>
        <input ref={this.widthRef} type="text" id="width" />
        (px)
        <br />
        <br />
        <label>Heigth: </label>
        <input ref={this.heightRef} type="text" id="heigth" />
        (px)
        <br />
        <br />
        <label>Color: </label>
        <input ref={this.colorRef} type="color" id="color" />
        <br />
        <br />
        <button onClick={this.startGame}>Create</button>
        <div style={{ marginTop: 20 }}>
          {this.state.arr.map((item, index) => (
            <div key={`card-${index}`}>
              <Card {...item} />
              <button onClick={() => this.deleteButton(`card-${index}`)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
