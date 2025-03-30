import { Stack } from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function RootLayout()
{
  return (
      <>
        <StatusBar backgroundColor={"white"} />
        <Stack>
          <Stack.Screen name="(tabs)"
                        options={{headerShown: false}}/>
          {/*<Stack.Screen name="about" options={{headerTitle: "About Mash"}}/>*/}
          <Stack.Screen name="+not-found" options={{headerShown: false}} />
        </Stack>
      </>);
}
