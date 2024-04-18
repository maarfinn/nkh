import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import HomeScreen from '../Screens/HomeScreen';
import Userlogin from '../Screens/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../Utils/Colors';
import Products from '../Screens/Products';
import Cart from '../Screens/Cart';
import MyProfile from '../Screens/MyProfile';
import ProductDetail from '../Screens/ProductDetail';
import Register from '../Screens/Register';
import EmailVerify from '../Screens/EmailVerify';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  const cartItemsLength = useSelector(state => state?.cart.items)?.length;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.mainColor,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          tabBarBadge: cartItemsLength > 0 ? cartItemsLength : null,
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: false,
          tabBarLabel: 'Products',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="basket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={MyProfile}
        options={{
          headerShown: false,
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Product"
              component={Products}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Product List"
              component={Products}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Product Detail"
              component={ProductDetail}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Userlogin}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Email-Verify"
              component={EmailVerify}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
