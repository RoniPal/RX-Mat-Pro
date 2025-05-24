import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from './src_pages/Home';
import Icon from 'react-native-vector-icons/FontAwesome5.js';
import Connect from './src_pages/Connect';
import Control from './src_pages/Control';
import Products from './src_pages/Products';
import Updates from './src_pages/Updates';
import Stats from './src_pages/Stats';

//Initialize navigation
const Tab = createBottomTabNavigator();

//main app
const App = () => {
  //Variables declearation
  const btnActiveColor = 'black';
  const btnColor = '#8f8f96';

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: btnActiveColor,
            tabBarInactiveTintColor: btnColor,
            tabBarStyle: {
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            },
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 900,
            },
            headerTitle: () => <Text style={styles.headerText}>RX Mat Pro</Text>,
            headerTitleAlign: "left",
          }}>
          {/* Home Nav */}
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="home" size={15} color={color} />
              ),
            }}
          />
          {/* Connect Nav */}
          <Tab.Screen
            name="Connect"
            component={Connect}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="rss" size={15} color={color} />
              ),
            }}
          />
          {/* Control Nav */}
          <Tab.Screen
            name="Control"
            component={Control}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="sliders-h" size={15} color={color} />
              ),
            }}
          />
          {/* Products Nav */}
          <Tab.Screen
            name="Products"
            component={Products}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="shopping-bag" size={15} color={color} />
              ),
            }}
          />
          {/* Updates Nav */}
          <Tab.Screen
            name="Updates"
            component={Updates}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="download" size={15} color={color} />
              ),
            }}
          />
          {/* Stats Nav */}
          <Tab.Screen
            name="Stats"
            component={Stats}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="chart-line" size={15} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText:{
    color: "#0f766e",
    fontWeight: 900,
    fontSize:25,
  }
});
