import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
  return(
      <MenuNavigator.Navigator
          initialRouteName='Menu'
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
      }}>
          <MenuNavigator.Screen
              name="Menu"
              component={Menu}
          />
          <MenuNavigator.Screen
              name="DishDetail"
              component={DishDetail}
              options={{ headerTitle: "Dish Detail"}}
          />            
      </MenuNavigator.Navigator>
  );
}

const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen() {
  return(
      <HomeNavigator.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}>
          <HomeNavigator.Screen
              name="Home"
              component={Home}
          />            
      </HomeNavigator.Navigator>
  );
}

const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
  return (
    <ContactNavigator.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}>
          <ContactNavigator.Screen
              name="Contact"
              component={Contact}
          />            
      </ContactNavigator.Navigator>
  )
}

const AboutNavigator = createStackNavigator();

function AboutNavigatorScreen() {
  return (
    <AboutNavigator.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}>
          <AboutNavigator.Screen
              name="About Us"
              component={About}
          />             
      </AboutNavigator.Navigator>
  )
}

const MainNavigator = createDrawerNavigator();

function MainNavigatorScreen() {
  return(
    <MainNavigator.Navigator drawerStyle={{ backgroundColor: '#D1C4E9' }}>
      <MainNavigator.Screen name='Home' component={HomeNavigatorScreen}/>
      <MainNavigator.Screen name='About Us' component={AboutNavigatorScreen}/>
      <MainNavigator.Screen name='Menu' component={MenuNavigatorScreen}/>
      <MainNavigator.Screen name='Contact Us' component={ContactNavigatorScreen}/>
    </MainNavigator.Navigator>
  )
}

class Main extends Component {
  render() {
    return(
      <NavigationContainer>
          <MainNavigatorScreen/>           
      </NavigationContainer>
    )
  }
}

export default Main;