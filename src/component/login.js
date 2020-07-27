import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { width } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      Phone: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./../image/applogo.png')} style={styles.logo}></Image>
        </View>

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('loginwithemail')} style={styles.loginbutton}>
            <Button style={{ marginTop: 5 }}><Text style={{ color: '#000' }}>Log in</Text></Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')} style={styles.Registerbutton}>
            <Button style={{ marginTop: 5 }}><Text style={{ color: '#fff' }}>Register</Text></Button>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: 'center',
  },
  loginbutton: {
    backgroundColor: '#fff',
    padding: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 13,
    borderRadius: 50,
    width: '45%',
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  Registerbutton: {
    backgroundColor: '#FE0000',
    padding: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 50,
    width: '45%',
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});