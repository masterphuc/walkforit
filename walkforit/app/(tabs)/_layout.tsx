import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function TabsLayout()
{
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "red",
                headerStyle: {backgroundColor: "#25292e"},
                headerShadowVisible: false,
                headerTintColor: "white",
                tabBarStyle: {backgroundColor: "#25292e"},
            }}>
            <Tabs.Screen name="index"
                          options={{headerTitle: "Sticker SMash",
                              tabBarIcon: ({focused, color}) =>
                                  <Ionicons name={focused ? "home-sharp" : "home-outline"}
                                            color={color}
                                            size={30} />,
                              headerLeft: () => <></>}}/>
            <Tabs.Screen name="about" options={{
                                            headerTitle: "About Mash",
                                            tabBarIcon: ({focused, color}) =>
                                                <Ionicons
                                                    name={focused ? 'information-circle' : 'information-circle-outline'}
                                                    color={color}
                                                    size={30} />,
                                            }}/>
            <Tabs.Screen name="not-found" options={{headerShown: false}} />
        </Tabs>
    );
}
