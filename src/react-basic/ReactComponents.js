import React, { Component } from "react";

export default class ReactComponents extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Daftar Belanja untuk {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
