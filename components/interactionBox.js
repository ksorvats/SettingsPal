import React from "react";
import { Text, View} from "react-native";
import {Spacer} from "../components/spacer";
import { textStyles } from "../styles/textStyles";
import { masterStyles } from "../styles/masterStyles";

// A box for holding other components (i.e. slider) in settings screen
export class InteractionBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[masterStyles.interactionBox, this.props.boxStyle]}>
        <View style={masterStyles.secondaryTitleBox}>
          <Text style={textStyles.whiteSubheading}>{this.props.title}</Text>
        </View>
        <Spacer/>
      </View>
    );
  }
}