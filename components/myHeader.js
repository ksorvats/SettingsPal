import React from "react";
import { View, Image } from "react-native";

// A header to be used for other (boxed) components
export class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ resizeMode: "contain", height: "100%", alignSelf: "center" }}
          source={require("../assets/logo2.png")}
        />
      </View>
    );
  }
}
