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

export default class nearby extends React.Component {
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
      filter:false
    }
  }

  renderUsers = ({ item }) => {
    return (

      <View style={{ width: '50%', height: '50%', padding: 5, marginTop: 5 }}>
        <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', justifyContent: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
          <TouchableOpacity style={{ width: '100%', marginRight: 0 }} onPress={() => this.props.navigation.navigate('userprofile')}>
            <View>
              <Image source={item.IMG} style={{ width: '100%', height: 150, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
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
              <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.props.navigation.navigate('Profile')}>
                <Icon name='user' color='#B1B1B1' size={20} />
              </TouchableOpacity>
            </View>

            <View style={{ width: '55%' }}>
              <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color:'#B1B1B1' }}>Islamabad</Text>
            </View>

            <View style={{ width: '20%' }}>
              <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 10 }} onPress={() => this.setState({ filter: true })}>
                <Icon name='sliders-h' color='#B1B1B1' size={20} />
              </TouchableOpacity>
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

        {/* Modal 1 -- Start -- */}
        <Modal visible={this.state.filter}>
          <View>
            <View style={{ height: 50, backgroundColor: 'white' }}>
              <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.setState({ filter: false })} style={{ width: '10%' }}>
                  <Icon name='times' color='#B1B1B1' size={20} />
                </TouchableOpacity>
                <View style={{ width: '75%' }}>
                  <TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Filter</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <ScrollView>

              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>I'm interested in</Text>
              </View>

              <TouchableOpacity style={{ padding: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', backgroundColor: '#fe0000', color: '#fff', padding: 10, borderRadius: 50 }}>
                  Men
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20, }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', backgroundColor: '#fe0000', color: '#fff', padding: 10, borderRadius: 50 }}>
                  Women
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20, }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', backgroundColor: '#fe0000', color: '#fff', padding: 10, borderRadius: 50 }}>
                  Everyone
                </Text>
              </TouchableOpacity>

              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Age</Text>
              </View>


              <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 0, borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 25 }}>
                <Picker style={{ height: 30, color: 'black', width: '90%', height: 30, }}
                  selectedValue={this.state.gender}
                  onValueChange={(itemValue) =>
                    this.setState({ gender: itemValue })}>
                  <Picker.Item label="Age" value="" />
                  <Picker.Item label="18" value="18" />
                  <Picker.Item label="19" value="19" />
                  <Picker.Item label="20" value="20" />
                  <Picker.Item label="21" value="21" />
                  <Picker.Item label="22" value="22" />
                  <Picker.Item label="23" value="23" />
                  <Picker.Item label="24" value="24" />
                  <Picker.Item label="25" value="25" />
                  <Picker.Item label="26" value="26" />
                  <Picker.Item label="27" value="27" />
                  <Picker.Item label="28" value="28" />
                  <Picker.Item label="29" value="29" />
                  <Picker.Item label="30" value="30" />
                  <Picker.Item label="31" value="31" />
                  <Picker.Item label="32" value="32" />
                  <Picker.Item label="33" value="33" />
                  <Picker.Item label="34" value="34" />
                  <Picker.Item label="35" value="35" />
                  <Picker.Item label="36" value="36" />
                  <Picker.Item label="37" value="37" />
                  <Picker.Item label="38" value="38" />
                  <Picker.Item label="39" value="39" />
                  <Picker.Item label="40" value="40" />
                  <Picker.Item label="41" value="41" />
                  <Picker.Item label="42" value="42" />
                  <Picker.Item label="43" value="43" />
                  <Picker.Item label="44" value="44" />
                  <Picker.Item label="45" value="45" />
                  <Picker.Item label="46" value="46" />
                  <Picker.Item label="47" value="47" />
                  <Picker.Item label="48" value="48" />
                  <Picker.Item label="49" value="49" />
                  <Picker.Item label="50" value="50" />
                  <Picker.Item label="51" value="51" />
                  <Picker.Item label="52" value="52" />
                  <Picker.Item label="53" value="53" />
                  <Picker.Item label="54" value="54" />
                  <Picker.Item label="55" value="55" />
                  <Picker.Item label="56" value="56" />
                  <Picker.Item label="57" value="57" />
                  <Picker.Item label="58" value="58" />
                  <Picker.Item label="59" value="59" />
                  <Picker.Item label="60" value="60" />
                  <Picker.Item label="61" value="61" />
                  <Picker.Item label="62" value="62" />
                  <Picker.Item label="63" value="63" />
                  <Picker.Item label="64" value="64" />
                  <Picker.Item label="65" value="65" />
                  <Picker.Item label="66" value="66" />
                  <Picker.Item label="67" value="67" />
                  <Picker.Item label="68" value="68" />
                  <Picker.Item label="69" value="69" />
                  <Picker.Item label="70" value="70" />
                </Picker>
              </View>

            </ScrollView>
          </View>
        </Modal>
        {/* Modal 1 -- End -- */}

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