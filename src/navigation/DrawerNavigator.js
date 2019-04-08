import React from 'react'
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import ManageIngredientsScreen from '../screens/ManageIngredientsScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MenuDrawer from '../screens/MenuDrawer';

const WIDTH = Dimensions.get('window').width

const DrawerConfig = {
    drawerWidth: WIDTH*0.8,
    contentComponent: ({ navigation }) => {
        return(<MenuDrawer navigation={navigation}/>)
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen : HomeScreen
        },
        ManageIngredients: {
            screen: ManageIngredientsScreen
        },
        Settings: {
            screen: SettingsScreen
        }
    },
//  InitialRoute =
    DrawerConfig
)

export default createAppContainer(DrawerNavigator)