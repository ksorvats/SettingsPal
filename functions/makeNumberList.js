import React from "react";
import { Text } from "react-native";

export const makeNumberList = (list) => {
  var newList = [];

  for (let i = 0; i < list.length; i++) {
    var line = i + 1 + ".  " + list[i] + "\n\n";
    newList.push(<Text style={{fontSize:15}} key={(3 * i)}>{line}</Text>);
  }

  return <Text>{newList}</Text>;
};
