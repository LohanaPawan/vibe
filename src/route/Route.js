import signup from './../component/signup';
import login from './../component/login';
import findpeople from '../component/findpeople';
import nearby from '../component/nearby';
import live from '../component/Live';
import Chat from '../component/Chat';
import Profile from '../component/Profile';
import userprofile from '../component/userprofile';
import news from '../component/news';
import message from '../component/message';
import subscribe from './../component/subscribe';
import loginwithemail from './../component/loginwithemail';
import sideMenu from '../route/sideMenu';
import Home from './../component/Home';
import home2 from './../component/home2';
import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({

    login: {
        screen: login,
        navigationOptions: {
           headerShown: null
        },
    },
    signup: {
        screen: signup,
        navigationOptions: {
            headerShown: null
        },
    },
    loginwithemail: {
        screen: loginwithemail,
        navigationOptions: {
            headerShown: null
        },
    },
    findpeople: {
        screen: findpeople,
        navigationOptions: {
            headerShown: null
        },
    },
    nearby: {
        screen: nearby,
        navigationOptions: {
            headerShown: null
        },
    },
    live: {
        screen: live,
        navigationOptions: {
            headerShown: null
        },
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            headerShown: null
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: null
        },
    },
    userprofile: {
        screen: userprofile,
        navigationOptions: {
            headerShown: null
        },
    },
    news: {
        screen: news,
        navigationOptions: {
            headerShown: null
        },
    },
    message: {
        screen: message,
        navigationOptions: {
            headerShown: null
        },
    },
    subscribe: {
        screen: subscribe,
        navigationOptions: {
            headerShown: null
        },
    },
    
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: null
        },
    },
    home2: {
        screen: sideMenu,
        navigationOptions: {
            headerShown: null
        },
     },
    
  },{
      initialRouteName: 'login'
  })

export default createAppContainer(Route);

