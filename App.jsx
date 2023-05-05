import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyFriends from "./MyFriends";
import Profile from "./Profile";
import MenuIcon from "./components/MenuIcon";
import MenuContent from "./components/MenuContent";
import { Provider } from "react-native-paper";


function App(){

  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaProvider>
      <Provider>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{headerShown: true, headerLeft: () => <MenuIcon />}}
            drawerContent={(props) => <MenuContent {...props} />}
          >
            <Drawer.Screen name="My Friends" component={MyFriends}/>
            <Drawer.Screen name="Profile" component={Profile}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;
