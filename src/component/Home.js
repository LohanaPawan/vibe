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

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default class Home extends React.Component {
  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      UID: '',
      DATA: [
        { id: 1, IMG: require('./../image/1.jpg') },
        { id: 2, IMG: require('./../image/2.jpg') },
        { id: 3, IMG: require('./../image/3.jpg') },
        { id: 4, IMG: require('./../image/4.jpg') },
        { id: 5, IMG: require('./../image/5.jpg') },
      ],
      filter: false,
    }


    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }


  renderUsers = () => {
    const { DATA } = this.state;


    return DATA.map((item, i) => {

      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 180, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>
            </Animated.View>

            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.IMG} />

            <View style={{ marginTop: -120 }}>

              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingLeft: 35, width: '75%', marginBottom: 15 }}>MR. Ahmi , 19 Karachi</Text>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} style={{ alignSelf: 'center', width: '33%' }}>
                  <Image style={{ width: 45, height: 45, alignSelf: "center" }} source={require('./../image/cross.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('message')} style={{ alignSelf: 'center', width: '33%' }}>
                  <Image style={{ width: 60, height: 60, alignSelf: "center" }} source={require('./../image/message.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} style={{ alignSelf: 'center', width: '33%' }}>
                  <Image style={{ width: 45, height: 45, alignSelf: "center" }} source={require('./../image/heart.png')} />
                </TouchableOpacity>
              </View>

            </View>


          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 180, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>


            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.IMG} />

            <View style={{ marginTop: -120 }}>

              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingLeft: 35, marginBottom: 15, }}>MR. Ahmi , 19 Karachi</Text>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} style={{ alignSelf: 'center', width: '33%' }}>
                  <Image style={{ width: 45, height: 45, alignSelf: "center" }} source={require('./../image/cross.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('message')} style={{ alignSelf: 'center', width: '33%' }}>
                  <Image style={{ width: 60, height: 60, alignSelf: "center" }} source={require('./../image/message.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} style={{ alignSelf: 'center', width: '33%' }}>
                  <Image style={{ width: 45, height: 45, alignSelf: "center" }} source={require('./../image/heart.png')} />
                </TouchableOpacity>
              </View>

            </View>

          </Animated.View>
        )
      }

    }).reverse()
  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>

        <View style={{ height: 50, backgroundColor: '#fff' }}>
          <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>

            <View style={{ width: '50%' }}>
              <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.props.navigation.navigate('Profile')}>
                <Icon name='user' color='#B1B1B1' size={20} />
              </TouchableOpacity>
            </View>

            <View style={{ width: '50%' }}>
              <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20 }} onPress={() => this.setState({ filter: true })}>
                <Icon name='cog' color='#B1B1B1' size={20} />
              </TouchableOpacity>
            </View>


          </View>
        </View>

        <View style={{ height: 0 }}>

        </View>
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
        </View>
        <View style={{ height: 0 }}>
        </View>

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
    alignItems: 'center',
    justifyContent: 'center',
  },

});