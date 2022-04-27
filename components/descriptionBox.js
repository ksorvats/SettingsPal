import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { textStyles } from "../styles/textStyles";
import { masterStyles } from "../styles/masterStyles";

// A box with the description of a camera setting for the settings screen
export class DescriptionBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[masterStyles.textBox, this.props.boxStyle]}>
        <View style={masterStyles.secondaryTitleBox}>
          <Text style={textStyles.whiteSubheading}>{this.props.title}</Text>
        </View>
        <ScrollView style={masterStyles.scrollBox}>
          <Text style={[textStyles.body, this.props.textStyle]}>
            {this.props.content}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
