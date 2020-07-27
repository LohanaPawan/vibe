import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, Animated, PanResponder, AsyncStorage, Alert, Modal } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Icon} from 'native-base'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { getDistance, getPreciseDistance } from 'geolib';
const numColumns = 2;

export default class news extends React.Component {
  constructor() {
    super()
    this.state = {
      Users: [
        { id: 1, IMG: require('./../image/1.jpg'), Name: 'Ahmmed, 20', Area: '1.7 mi (Islamabad)' },
        { id: 2, IMG: require('./../image/2.jpg'), Name: 'Ali, 26', Area: '7.1 mi (Lahore)' },
        { id: 3, IMG: require('./../image/3.jpg'), Name: 'Raza, 22', Area: '2.1 mi (Karachi)' },
        { id: 4, IMG: require('./../image/4.jpg'), Name: 'Usman, 27', Area: '4.5 mi (Multan)' },
        { id: 5, IMG: require('./../image/5.jpg'), Name: 'Fahad, 30', Area: '8.3 mi (Sahiwal)' },
        { id: 6, IMG: require('./../image/6.jpg'), Name: 'Mudassar, 29', Area: '5.9 mi (Rawalpindi)' },
      ],
    }
  }

  renderUsers = ({ item }) => {
    return (

      <View style={{ width: '100%', height: '50%', padding: 5, marginTop: 5 }}>
        <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', justifyContent: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
          <TouchableOpacity style={{ width: '100%', marginRight: 0 }} onPress={() => this.props.navigation.navigate('userprofile')}>
            <View>
              <Image source={item.IMG} style={{ width: '100%', height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 16, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>{item.Name}</Text>
              <Text style={{ fontSize: 15, paddingLeft: 10, paddingRight: 5, paddingBottom: 10, paddingTop: 5, fontSize: 12, color: '#747474' }}>{item.Area}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )

  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>

        <View style={{ height: 50, backgroundColor: '#fff' }}>
          <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>

            <View style={{ width: '20%' }}>
              <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.setState({ filter: true })}>
                <Icon name='user' color='#B1B1B1' size={20} />
              </TouchableOpacity>
            </View>

            <View style={{ width: '55%' }}>
              <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color:'#B1B1B1' }}>Likes</Text>
            </View>

            <View style={{ width: '20%' }}>
              
            </View>

          </View>
        </View>

        <ScrollView>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <FlatList
              pagingEnabled
              data={this.state.Users}
              renderItem={this.renderUsers}
              keyExtractor={item => item.id}
              numColumns={numColumns}
            />
          </View>
        </ScrollView>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});