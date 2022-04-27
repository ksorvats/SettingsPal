import React from "react";
import { Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { textStyles } from "../styles/textStyles";
import { masterStyles } from "../styles/masterStyles";
import { successColor } from "../styles/themes";

// A touchable button in the secondary theme color
export class SecondaryButtonRed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[masterStyles.buttonSmallRed, this.props.style]}
        onPress={() =>
          this.props.navigation.navigate(
            this.props.destination,
            this.props.routeParams
          )
        }
      >
        <Text style={textStyles.buttonText}>{this.props.content}</Text>
          {
            this.props.icon == null ? (
              null
            ):          
            <View style = {{width:20, height:20, borderRadius:15,backgroundColor:successColor,justifyContent:'center',alignItems:'center'}}>
              <MaterialCommunityIcons name={this.props.icon} style={{color:'white',fontSize:15}}/>
            </View>
          }
      </TouchableOpacity>
    );
  }
}
