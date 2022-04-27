import React from "react";
import { View } from "react-native";

// A vertical spacer to separate components
export class VerticalSpacer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={[{ width: '5%' }, this.props.style]}></View>;
  }
}
