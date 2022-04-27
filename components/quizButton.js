import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { textStyles } from "../styles/textStyles";
import { masterStyles } from "../styles/masterStyles";

// A touchable button to be used in quizzes
export class QuizButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[masterStyles.quizButton, this.props.style]}
      >
        <Text style={textStyles.quizButtonText}>{this.props.content}</Text>
      </TouchableOpacity>
    );
  }
}
