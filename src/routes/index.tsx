import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { AddTask } from "../screens/AddTask";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="AddTask" component={AddTask} />
            </Navigator>
        </NavigationContainer>
    )
}