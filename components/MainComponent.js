import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, ToastAndroid, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import NetInfo from '@react-native-community/netinfo';
import { Icon } from 'react-native-elements';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent';
import Login from './LoginComponent';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders, postComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    postComment: () => dispatch(postComment())
})

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <View style={styles.drawerHeader}>
            <View style={{flex: 1}}>
                <Image source={require('./images/logo.png')} style={styles.drawerImage}/>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>
                    Ristorante Con Fusion
                </Text>
            </View>
        </View>
        <DrawerItemList {...props}/>
    </ScrollView>
)

const LoginNavigator = createStackNavigator();

function LoginNavigatorScreen() {
  return (
    <LoginNavigator.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}>
          <LoginNavigator.Screen
              name="Login"
              component={Login}
              options={({navigation}) => ({
                headerLeft: () => (
                    <Icon
                      name='menu'
                      size={24}
                      color='white'
                      iconStyle={{marginLeft:10}}
                      onPress={() => navigation.toggleDrawer()}>
                    </Icon>
                )
              })}
          />            
      </LoginNavigator.Navigator>
  )
}

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
              options={({navigation}) => ({
                  headerLeft: () => (
                      <Icon
                        name='menu'
                        size={24}
                        color='white'
                        iconStyle={{marginLeft:10}}
                        onPress={() => navigation.toggleDrawer()}>
                      </Icon>
                  )
              })}
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
              options={({navigation}) => ({
                headerLeft: () => (
                    <Icon
                      name='menu'
                      size={24}
                      color='white'
                      iconStyle={{marginLeft:10}}
                      onPress={() => navigation.toggleDrawer()}>
                    </Icon>
                    )
                })}
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
              options={({navigation}) => ({
                headerLeft: () => (
                    <Icon
                      name='menu'
                      size={24}
                      color='white'
                      iconStyle={{marginLeft:10}}
                      onPress={() => navigation.toggleDrawer()}>
                    </Icon>
                )
              })}
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
              options={({navigation}) => ({
                headerLeft: () => (
                    <Icon
                      name='menu'
                      size={24}
                      color='white'
                      iconStyle={{marginLeft:10}}
                      onPress={() => navigation.toggleDrawer()}>
                    </Icon>
                )
              })}
          />             
      </AboutNavigator.Navigator>
  )
}

const ReservationNavigator = createStackNavigator();

function ReservationNavigatorScreen() {
  return (
    <ReservationNavigator.Navigator
          initialRouteName='Reservation'
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}>
          <ReservationNavigator.Screen
              name="Reserve Table"
              component={Reservation}
              options={({navigation}) => ({
                headerLeft: () => (
                    <Icon
                      name='menu'
                      size={24}
                      color='white'
                      iconStyle={{marginLeft:10}}
                      onPress={() => navigation.toggleDrawer()}>
                    </Icon>
                )
              })}
          />            
      </ReservationNavigator.Navigator>
  )
}

const FavoritesNavigator = createStackNavigator();

function FavoritesNavigatorScreen() {
  return (
    <FavoritesNavigator.Navigator
          initialRouteName='Favorites'
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}>
          <FavoritesNavigator.Screen
              name="Favorites"
              component={Favorites}
              options={({navigation}) => ({
                headerLeft: () => (
                    <Icon
                      name='menu'
                      size={24}
                      color='white'
                      iconStyle={{marginLeft:10}}
                      onPress={() => navigation.toggleDrawer()}>
                    </Icon>
                )
              })}
          />
          <MenuNavigator.Screen
              name="DishDetail"
              component={DishDetail}
              options={{ headerTitle: "Dish Detail"}}
          />             
      </FavoritesNavigator.Navigator>
  )
}


const MainNavigator = createDrawerNavigator();

function MainNavigatorScreen() {
  return(
    <MainNavigator.Navigator
        initialRouteName='Home'
        drawerStyle={{ backgroundColor: '#D1C4E9' }}
        drawerContent={props => <CustomDrawerContentComponent {...props}/>}
        >
        <MainNavigator.Screen 
            name='Login' 
            component={LoginNavigatorScreen}
            options={{
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={23}
                        color={tintColor}>
                    </Icon>
                )
            }}
        />
        <MainNavigator.Screen 
            name='Home' 
            component={HomeNavigatorScreen}
            options={{
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}>
                    </Icon>
                )
            }}
        />
        <MainNavigator.Screen 
            name='About Us' 
            component={AboutNavigatorScreen}
            options={{
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={23}
                        color={tintColor}>
                    </Icon>
                )
            }}
        />
        <MainNavigator.Screen 
            name='Menu' 
            component={MenuNavigatorScreen}
            options={{
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}>
                    </Icon>
                )
            }}
        />
        <MainNavigator.Screen 
            name='Contact Us' 
            component={ContactNavigatorScreen}
            options={{
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={22}
                        color={tintColor}>
                    </Icon>
                )
            }}
        />
        <MainNavigator.Screen 
            name='My Favorites' 
            component={FavoritesNavigatorScreen}
            options={{
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color={tintColor}>
                    </Icon>
                )
            }}
        />
        <MainNavigator.Screen 
            name='Reserve Table' 
            component={ReservationNavigatorScreen}
            options={{
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='cutlery'
                        type='font-awesome'
                        size={24}
                        color={tintColor}>
                    </Icon>
                )
            }}
        />
    </MainNavigator.Navigator>
  )
}

class Main extends Component {
  componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders();
      this.unsub;
  }

  unsub = NetInfo.addEventListener(connectionChange => this.handleConnectivityChange(connectionChange))

  componentWillMount() {
    console.log('remove')
  }

  handleConnectivityChange = (connectionInfo) => {
      if (Platform.OS !== 'ios') {
        switch (connectionInfo.type) {
            case 'none':
                ToastAndroid.show('You are now offline!', ToastAndroid.LOG)
                break
            case 'wifi':
                ToastAndroid.show('You are now connected to WIFI!', ToastAndroid.LOG)
                break
            case 'cellular':
                ToastAndroid.show('You are now connected to Cellular!', ToastAndroid.LOG)
                break
            case 'unknown':
                ToastAndroid.show('You now have aun unknown connection!', ToastAndroid.LOG)
                break
            default:
                break
        }
     }
  }

  render() {
    return(
      <NavigationContainer>
          <MainNavigatorScreen/>           
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);