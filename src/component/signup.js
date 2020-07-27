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
  Alert,
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
import storage from '@react-native-firebase/storage';
import {Icon} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import baseUrl from '../baseUrl';
import FormData from 'form-data';
import Geolocation from '@react-native-community/geolocation';

axios.defaults.baseURL = baseUrl;

var radio_props = [
  {value: 0, label: 'Male'},
  {value: 1, label: 'Female'},
];
const imagePickerOptions = {
  noData: true,
};

const FireBaseStorage = storage();
export default class signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      gender: '',
      chooseDateTo: '',
      policy: false,
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
      uri: '',
      age: '',
      latitude: '',
      longitude: '',
      city: 'abc',
      country: 'abc',
      ip: 'abc',
      region: 'abc',
      street: 'abc',
      city_code: '0000',
    };
  }

  handlePickerTo = (datetime) => {
    this.setState({
      isVisibleTo: false,
      chooseDateTo: moment(datetime).format('YYYY-MM-DD'),
    });
  };

  hidePickerTo = () => {
    this.setState({
      isVisibleTo: false,
    });
  };

  componentDidMount() {
    Geolocation.getCurrentPosition((info) => {
      console.log(info.coords.latitude);
      this.setState({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
    });

    // alert(JSON.stringify(FireBaseStorage))
  }
  findImage() {
    console.log('----------');
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
      console.log('----------');
      console.log(response);

      if (response.didCancel) {
        alert('canceled');
      } else if (response.error) {
        alert('An error occurred: ', response.error);
      } else {
        this.setState({uri: response.uri});
        console.log('2', response);
      }
    });
  }

  showPickerTo = () => {
    this.setState({
      isVisibleTo: true,
    });
  };

  next() {
    this.setState({policy: false});
    this.props.navigation.navigate('findpeople');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#000', height: '4%'}}></View>

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
                Register
              </Text>
            </View>
          </View>
        </View>

        <ScrollView>
          <TouchableOpacity onPress={() => this.findImage()}>
            <Image
              style={{
                alignSelf: 'center',
                width: 100,
                height: 100,
                marginTop: wp('5%'),
                marginBottom: 10,
              }}
              source={require('./../image/camera.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 15, alignSelf: 'center', color: '#747474'}}>
              We need your photo, name and data of birth
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp('5%'),
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={this.showPickerTo}>
              <TextInput
                style={styles.date}
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#fe0000',
                  },
                }}
                label="Enter New Username"
                placeholder="Ener New Username"
                placeholderTextColor={'#666666'}
                onChangeText={(username) => this.setState({username})}
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
            <TouchableOpacity onPress={this.showPickerTo}>
              <TextInput
                style={styles.date}
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#fe0000',
                  },
                }}
                label="Enter Email Address"
                placeholder="Ener New Username"
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
              marginTop: 10,
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
                label="Age"
                placeholder="Age"
                placeholderTextColor={'#666666'}
                keyboardType="number-pad"
                editable={true}
                onChangeText={(age) => this.setState({age})}
              />
            </TouchableOpacity>

            {/* <DateTimePickerModal
              isVisible={this.state.isVisibleTo}
              onConfirm={this.handlePickerTo}
              onCancel={this.hidePickerTo}
              mode={'date'}
              datePickerModeAndroid={'spinner'}
            /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp('5%'),
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={this.showPickerTo}>
              <TextInput
                style={styles.date}
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#fe0000',
                  },
                }}
                label="Password"
                placeholder="Ener New Username"
                placeholderTextColor={'#666666'}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
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
            <TouchableOpacity onPress={this.showPickerTo}>
              <TextInput
                style={styles.date}
                mode="outlined"
                theme={{
                  colors: {
                    primary: '#fe0000',
                  },
                }}
                label="Confirm Password"
                placeholder="Ener New Username"
                secureTextEntry={true}
                placeholderTextColor={'#666666'}
                onChangeText={(confirmPassword) =>
                  this.setState({confirmPassword})
                }
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              padding: 40,
              fontSize: 20,
              color: '#181718',
              marginTop: -20,
              marginBottom: -20,
            }}>
            I am
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 0,
              borderColor: '#000',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
            }}>
            <Picker
              style={{height: 30, color: 'black', width: '90%', height: 30}}
              selectedValue={this.state.gender}
              onValueChange={(itemValue) => this.setState({gender: itemValue})}>
              <Picker.Item label="a women" value="female" />
              <Picker.Item label="a man" value="male" />
            </Picker>
          </View>

          <View style={{padding: 10, marginTop: 20}}>
            <Text style={{textAlign: 'center', color: '#747474'}}>
              We use your e-mail address to manage your{'\n'}
              account and to inform you about news and special{'\n'}
              offers. You can use the unsubscribe link to object to{'\n'}
              this at any time. By registering. you also accept our
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: '#fe0000',
                  padding: 10,
                }}>
                T&Cs and Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => this.signUp()}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </ScrollView>

        <Modal visible={this.state.policy}>
          <View>
            <ScrollView>
              <View style={{padding: 20}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Privacy and Advertising
                </Text>
                <Text style={{fontSize: 15, marginTop: 10}}>
                  Do you only want to see ads that are relevant for you?{'\n'}
                  {'\n'}
                  Upon providing your consent, you will be shown personalized
                  content from our advertising partners, including Veibes(a
                  subsidiary of Twitter), Veibes partners and OpenX. Depending
                  on your device and app settings, the ad partners will then
                  process your personal data, including your device and ad IDs,
                  device information, your approximate shared location, your
                  profile information and other demographic and other data
                  related to your interests.{'\n'}
                  {'\n'}
                  Because your privacy is important to us, we will never share
                  your e-mail address, your username, of your profile image.
                  {'\n'}
                  {'\n'}
                  This data will be processed in accordance with the respective
                  privacy policy of Veibes, the individual advertising partner
                  and us.{'\n'}
                  {'\n'}
                  By clicking on OK, you confirm that you are above 16 years of
                  age and that you consent to the processing and sharing of your
                  data for the displaying of personalized ads. You can object to
                  this at any time via your device and app settings.
                </Text>

                <View style={{marginTop: 30}}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setState({policy: true})}>
                    <Text style={styles.buttonText}>Accept</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.setState({policy: false})}
                    style={{marginTop: 20}}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
  async signUp() {
    const {
      password,
      confirmPassword,
      username,
      email,
      gender,
      age,
      uri,
      latitude,
      longitude,
      ip,
      country,
      city,
      city_code,
      street,
      region,
    } = this.state;
    if (password !== confirmPassword) {
      alert('Password did not match');
      return false;
    }
    this.setState({
      isLoading: true,
    });

    const data = new FormData();
    data.append('name', username);
    data.append('email', email);
    data.append('gender', gender);
    data.append('age', age);
    data.append('pass', password);
    data.append('feature_image', uri);
    data.append('latitude', latitude);
    data.append('longitude', longitude);
    data.append('ip', ip);
    data.append('country', country);
    data.append('city', city);
    data.append('region', region);
    data.append('street', street);
    data.append('city_code', city_code);

    axios
      .post('/signup.php', data, {'content-type': 'multipart/form-data'})
      .then((res) => {
        console.log('response : ', res);
        alert('Registered successfully!');
        this.props.navigation.navigate('loginwithemail');
      })
      .catch((err) => {
        alert(err);
      });

    //   auth()
    // .createUserWithEmailAndPassword(email, password)
    // .then((res) => {
    //   console.log('response is : ', res)
    //   res.user.updateProfile({
    //     displayName: username
    //   })
    //   console.log('response is : ', res)
    //   alert('User account created & signed in!');
    //   this.props.navigation.navigate('loginwithemail')
    // })
    // .catch(error => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     alert('That email address is already in use!');
    //   }

    //   if (error.code === 'auth/invalid-email') {
    //    alert('That email address is invalid!');
    //   }

    //   if(error.code === 'auth/weak-password'){
    //     alert("Password should be at least 6 characters")
    //   }

    //   console.error(error);
    // });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop: hp('0%'),
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
