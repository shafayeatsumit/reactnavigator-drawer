import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import LoginScreen from '../containers/LoginScreen'
import SignupScreen from '../containers/SignupScreen'
import ForgottenPasswordScreen from '../containers/ForgottenPasswordScreen'
import Screen1 from '../containers/Screen1'
import Screen2 from '../containers/Screen2'
import Screen3 from '../containers/Screen3'


const DrawerStack = DrawerNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 },
  loginScreen: { screen: LoginScreen },
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'Logged In to your app!',
    headerLeft: <Text onPress={() => {
    	      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }

}}>Menu</Text>
  })
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen, navigationOptions: { header : null } },
  signupScreen: { screen: SignupScreen,navigationOptions: { headerLeft: null } },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#f0f5f9'},
    title: 'You are not logged in'
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

export default PrimaryNav