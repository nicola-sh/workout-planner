import React from "react";

export class UserSettings extends React.Component {
  state = {
    name: "Nicolay",
    age: "22",
    height: "184",
    weight: "80",
  };

  getUserSettings = () => {
    return this.state;
  };

  render() {
    return null;
  }
}
