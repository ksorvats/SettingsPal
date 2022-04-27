import React from "react";
import { useKeepAwake } from "expo-keep-awake";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MyHeader } from  "./components/myHeader"
import { LandingScreen } from "./screens/LandingScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { TutorialScreen } from "./screens/TutorialScreen";
import { PracticeScreen } from "./screens/PracticeScreen";
import { QuizScreen } from "./screens/QuizScreen";
import { MiniQuizScreen} from "./screens/MiniQuizScreen";

const Stack = createStackNavigator();

// Stores screens and manages navigation
function App() {
  useKeepAwake();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={() => ({ title: "" })}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: () => <MyHeader /> }}
        />
        <Stack.Screen
          name="Tutorial"
          component={TutorialScreen}
        />
        <Stack.Screen
          name="Setting"
          component={SettingsScreen}
          options={({ route }) => ({ title: route.params.setting.name })}
        />
        <Stack.Screen
          name="Practice"
          component={PracticeScreen}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={({ route }) => ({ title: "Spot the Difference" })}
        />
        <Stack.Screen
          name="MiniQuiz"
          component={MiniQuizScreen}
          options={({ route }) => ({ title: "Test your Knowledge" })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;