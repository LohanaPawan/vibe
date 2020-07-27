import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Picker,
  Text,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
const {width: WIDTH} = Dimensions.get('window');
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, TouchableRipple} from 'react-native-paper';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import Home from './Home';
import Nearby from './nearby';
import Live from './Live';
import Chat from './Chat';
import News from './news';

var radio_props = [
  {value: 0, label: 'Male'},
  {value: 1, label: 'Female'},
];
export default class home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      nearby: false,
      live: false,
      chat: false,
      profile: false,
      uid: this.props.navigation.state.params.uid,
    };
  }

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Ionicons
        name="ios-time"
        type="font-awesome"
        size={24}
        style={{color: tintColor}}
        containerStyle={{width: width(10)}}
      />
    ),
  };
  ScreenView() {
    if (this.state.home) {
      return <Home navigation={this.props.navigation} />;
    } else if (this.state.live) {
      return <Live navigation={this.props.navigation} />;
    } else if (this.state.nearby) {
      return <Nearby navigation={this.props.navigation} />;
    } else if (this.state.chat) {
      return <Chat navigation={this.props.navigation} />;
    } else {
      return <News navigation={this.props.navigation} />;
    }
  }

  renderDayRow = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.userList}
        onPress={() => this.props.navigation.navigate('duadetail')}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={styles.image} source={item.image} />

          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.subject}</Text>
            <FontAwesome
              name="angle-right"
              size={25}
              style={{
                textAlign: 'right',
                marginLeft: wp('65%'),
                marginTop: -25,
              }}
            />
            <Text style={styles.desc2}>{item.comments}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <AntDesign
        name="home"
        type="font-awesome"
        size={24}
        style={{color: tintColor}}
        containerStyle={{width: width(10)}}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        {this.ScreenView()}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: hp('0%'),
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#b9b9b9',
            height: 60,
          }}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                nearby: true,
                home: false,
                live: false,
                chat: false,
                profile: false,
              })
            }
            style={{
              padding: 15,
              alignItems: 'center',
              backgroundColor: '#fff',
              width: wp('20%'),
            }}>
            <Icon
              name="location-arrow"
              type="font-awesome"
              size={24}
              style={{color: this.state.nearby ? '#EB3007' : '#B1B1B1'}}
              containerStyle={{width: width(10)}}
            />
            <Text
              style={{
                color: this.state.nearby ? '#EB3007' : '#B1B1B1',
                fontSize: 12,
              }}>
              Nearby
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.setState({
                nearby: false,
                home: false,
                live: true,
                chat: false,
                profile: false,
              })
            }
            style={{
              padding: 15,
              alignItems: 'center',
              backgroundColor: '#fff',
              width: wp('20%'),
            }}>
            <Icon
              name="play-circle"
              type="font-awesome"
              size={24}
              style={{color: this.state.live ? '#EB3007' : '#B1B1B1'}}
              containerStyle={{width: width(10)}}
            />
            <Text
              style={{
                color: this.state.live ? '#EB3007' : '#B1B1B1',
                fontSize: 12,
              }}>
              Live
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.setState({
                nearby: false,
                home: true,
                live: false,
                chat: false,
                profile: false,
              })
            }
            style={{
              padding: 15,
              alignItems: 'center',
              backgroundColor: '#fff',
              width: wp('20%'),
            }}>
            <Icon
              name="fire"
              type="font-awesome"
              size={24}
              style={{color: this.state.home ? '#EB3007' : '#B1B1B1'}}
              containerStyle={{width: width(10)}}
            />
            <Text
              style={{
                color: this.state.home ? '#EB3007' : '#B1B1B1',
                fontSize: 12,
              }}>
              Match
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.setState({
                nearby: false,
                home: false,
                live: false,
                chat: true,
                profile: false,
              })
            }
            style={{
              padding: 15,
              alignItems: 'center',
              backgroundColor: '#fff',
              width: wp('20%'),
            }}>
            <Icon
              name="comment"
              type="font-awesome"
              size={24}
              style={{color: this.state.chat ? '#EB3007' : '#B1B1B1'}}
              containerStyle={{width: width(10)}}
            />
            <Text
              style={{
                color: this.state.chat ? '#EB3007' : '#B1B1B1',
                fontSize: 12,
              }}>
              Chat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.setState({
                nearby: false,
                home: false,
                live: false,
                chat: false,
                profile: true,
              })
            }
            style={{
              padding: 15,
              alignItems: 'center',
              backgroundColor: '#fff',
              width: wp('20%'),
            }}>
            <Icon
              name="bell"
              type="font-awesome"
              size={24}
              style={{color: this.state.profile ? '#EB3007' : '#B1B1B1'}}
              containerStyle={{width: width(10)}}
            />
            <Text
              style={{
                color: this.state.profile ? '#EB3007' : '#B1B1B1',
                fontSize: 12,
              }}>
              News
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Picker: {
    width: wp('30%'),
    marginLeft: wp('40%'),
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
    marginTop: wp('2%'),
    marginBottom: wp('5%'),
  },
  text: {
    fontSize: 18,
    marginTop: wp('5%'),
    fontWeight: 'bold',
  },
  mainBox: {
    flexDirection: 'row',
    marginHorizontal: wp('6%'),
  },
  box: {
    backgroundColor: '#fff',
    width: wp('40%'),
    height: hp('20%'),
    marginRight: wp('7%'),
    marginBottom: wp('7%'),
  },
  offer: {
    marginHorizontal: wp('5%'),
    marginVertical: hp('3%'),
    color: '#666666',
    fontSize: 12,
  },
  number: {
    marginHorizontal: wp('5%'),
    color: '#5f5d70',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: hp('5%'),
    alignItems: 'center',
    backgroundColor: '#00cb9c',
    borderRadius: wp('10%'),
    height: 50,
    marginHorizontal: wp('10%'),
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    marginTop: hp('1.5%'),
  },

  userList: {
    padding: 8,
    backgroundColor: '#fff',
    borderBottomColor: '#B9B9B9',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    marginTop: wp('2%'),
    color: '#000',
  },
  desc: {
    fontSize: 13,
    color: '#B9B9B9',
  },
  desc2: {
    fontSize: 13,
    color: '#B9B9B9',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: wp('1%'),
    marginRight: wp('3%'),
    borderRadius: 10,
    marginLeft: wp('1%'),
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 55,
    bottom: 10,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
