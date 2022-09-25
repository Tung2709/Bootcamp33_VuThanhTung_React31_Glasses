import React, { Component } from "react";
import background from "../Asset/img/background.jpg";
import model from "../Asset/img/model.jpg";
import g1 from "../Asset/img/g1.jpg";
import g2 from "../Asset/img/g2.jpg";
import g3 from "../Asset/img/g3.jpg";
import g4 from "../Asset/img/g4.jpg";
import g5 from "../Asset/img/g5.jpg";
import g6 from "../Asset/img/g6.jpg";
import g7 from "../Asset/img/g7.jpg";
import g8 from "../Asset/img/g8.jpg";
import g9 from "../Asset/img/g9.jpg";
import v1 from "../Asset/img/v1.png";
import v2 from "../Asset/img/v2.png";
import v3 from "../Asset/img/v3.png";
import v4 from "../Asset/img/v4.png";
import v5 from "../Asset/img/v5.png";
import v6 from "../Asset/img/v6.png";
import v7 from "../Asset/img/v7.png";
import v8 from "../Asset/img/v8.png";
import v9 from "../Asset/img/v9.png";

export default class State extends Component {
  imageList = [
    { src: g1, id: 1 },
    { src: g2, id: 2 },
    { src: g3, id: 3 },
    { src: g4, id: 4 },
    { src: g5, id: 5 },
    { src: g6, id: 6 },
    { src: g7, id: 7 },
    { src: g8, id: 8 },
    { src: g9, id: 9 },
  ];
  glassList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: v1,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: v2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: v3,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: v4,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: v5,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: v6,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: v7,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: v8,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: v9,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: v1,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };
  renderGlass = (event) => {
    console.log(event.target.id);
    for (let i = 0; i < this.glassList.length; i++) {
      if (event.target.id == this.glassList[i].id) {
        this.setState({
          id: this.glassList[i].id,
          price: this.glassList[i].price,
          name: this.glassList[i].name,
          url: this.glassList[i].url,
          desc: this.glassList[i].desc,
        });
      }
    }
    console.log(this.state);
  };
  render() {
    return (
      <div className="glasses" style={{ position: "relative" }}>
        <img src={background} style={{ width: "100%" }} alt="" />
        <div
          className="container d-flex justify-content-between "
          style={{ marginTop: 100, position: "absolute", top: 0, left: 100 }}
        >
          <img src={model} style={{ width: 300, height: 300 }} alt="..." />
          <div className="bg-white" style={{ width: 300 }}>
            <img
              src={model}
              style={{ width: 300, height: 300 }}
              id="model"
              alt="..."
            ></img>
            <img
              src={this.state.url}
              style={{
                position: "absolute",
                top: 70,
                right: 85,
                width: 150,
                height: 50,
              }}
              alt=""
            />
            <div className="card-body">
              <h3>{this.state.name}</h3>
              <span>{this.state.price}</span>
              <p>{this.state.desc}</p>
            </div>
          </div>
        </div>
        <div
          className="glassItem container bg-light"
          id="glassItem"
          style={{ marginTop: 30, position: "absolute", top: 550, left: 100 }}
        >
          {this.imageList.map((index) => (
            <button className="btn" onClick={this.renderGlass}>
              <img
                src={index.src}
                id={index.id}
                style={{ width: 150, height: 100 }}
              ></img>
            </button>
          ))}
        </div>
      </div>
    );
  }
}
