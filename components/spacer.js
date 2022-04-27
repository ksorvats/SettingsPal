import React from "react";
import { View } from "react-native";

// A horizontal spacer to separate components
export class Spacer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={[{ height: 15, width: 10 }, this.props.style]}></View>;
  }
}
