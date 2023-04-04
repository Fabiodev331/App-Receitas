import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/home";
import Favorites from "../pages/favorites";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#121212',

            tabBarStyle:{
                backgroundColor: '#FFF',
                borderTopWidth: 0
            }
        }}
        >
            <Tab.Screen
            name="HomeTab"
            component={Home}
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Icon name= "home" color="#000" size={size} />
                    }
                    return <Icon name= "home-outline" color={color} size={size} />
                }
            }}
            />

            <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Icon name= "heart" color="#ff4141" size={size} />
                    }
                    return <Icon name= "heart-outline" color={color} size={size} />
                }
            }}
            />            
        </Tab.Navigator>
    )
}