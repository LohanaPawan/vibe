import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
  Picker,
  Modal,
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
import {AntDesign} from 'react-native-vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import baseUrl from '../baseUrl';
axios.defaults.baseURL = baseUrl;

import moment from 'moment';
import {Icon} from 'native-base';
var radio_props = [
  {value: 0, label: 'Male'},
  {value: 1, label: 'Female'},
];
export default class loginwithemail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      policy: false,
      isLoading: false,
      username: '',
      ip: 'abc',
      country: 'abc',
      city: 'abc',
    };
  }

  componentDidMount() {}

  login() {
    this.setState({isLoading: true});
    const {email, password, ip, country, city} = this.state;

    axios
      .post('/login.php', {
        pass: password,
        email: email,
        ip,
        country,
        city,
      })
      .then((res) => {
        console.log(res);
        alert('Login successful');
        //this.props.navigation.navigate('findpeople', {uid: res.data.uid});
      });
    // auth()
    // .signInWithEmailAndPassword(email, password)
    // .then( (res) => {
    //   this.setState({
    //     username: res.user.displayName
    //   })
    //   alert('Login successful')
    //   this.props.navigation.navigate('findpeople', {username: this.state.username});
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.taskbar}>
          <View
            style={{marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}
              style={{width: '10%'}}>
              <Icon name="arrow-back" color="#fff" size={20} />
            </TouchableOpacity>
            <View style={{width: '75%', marginTop: -1}}>
              <Text style={{alignSelf: 'center', fontSize: 18, color: 'white'}}>
                Login
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp('5%'),
              justifyContent: 'space-between',
              marginTop: 50,
            }}>
            <TouchableOpacity>
              <TextInput
                style={styles.date}
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#fe0000',
                  },
                }}
                label="Enter Email"
                placeholder="Enter Email"
                placeholderTextColor={'#666666'}
                onChangeText={(email) => this.setState({email})}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp('5%'),
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity>
              <TextInput
                style={styles.date}
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#fe0000',
                  },
                }}
                label="Enter Your Password"
                placeholder="Enter Your Password"
                placeholderTextColor={'#666666'}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={true}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    marginLeft: wp('5%'),
    marginTop: wp('10%'),
    fontSize: hp('5%'),
    fontWeight: 'bold',
    color: '#5f5d70',
  },
  input: {
    backgroundColor: '#fff',
    width: '82%',
    alignSelf: 'center',
  },
  input1: {
    marginTop: wp('4%'),
    marginHorizontal: wp('5%'),
    backgroundColor: '#fff',
  },
  button: {
    marginTop: hp('5%'),
    alignItems: 'center',
    backgroundColor: '#EB3007',
    borderRadius: wp('50%'),
    height: 40,
    marginHorizontal: wp('10%'),
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    marginTop: hp('1%'),
  },
  signupView: {
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },
  alresdy: {
    fontSize: hp('2.5%'),
    color: '#666666',
  },
  signupText: {
    fontSize: hp('2.5%'),
    marginTop: hp('1%'),
    color: '#00cb9c',
    fontWeight: 'bold',
  },
  location: {
    position: 'absolute',
    marginLeft: wp('80%'),
    marginTop: hp('77.5%'),
  },
  radioButton: {
    marginRight: 30,
    marginTop: 10,
  },
  mainRadioView: {
    marginLeft: wp('5%'),
    marginTop: hp('3%'),
  },
  choose: {
    fontSize: 15,
    color: '#666666',
  },
  date: {
    width: wp('90%'),
    backgroundColor: '#fff',
  },
  taskbar: {
    height: 50,
    backgroundColor: '#f30000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
