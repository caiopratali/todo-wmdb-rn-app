import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { AddTask } from "../screens/AddTask";

const queryClient = new QueryClient()

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Home" component={Home} />
                    <Screen name="AddTask" component={AddTask} />
                </Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    )
}