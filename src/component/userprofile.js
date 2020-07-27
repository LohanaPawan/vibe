import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Icon} from 'native-base'

var radio_props = [
    { value: 0, label: 'Male' },
    { value: 1, label: 'Female' },
];
export default class userprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Sliderimages: [
                { id: 2, IMG: require('./../image/2.jpg') },
                { id: 3, IMG: require('./../image/3.jpg') },
                { id: 4, IMG: require('./../image/4.jpg') },
                { id: 5, IMG: require('./../image/5.jpg') },
            ],
        };
    }

    render() {
        const swipeSetting = {

            autoClose: true,
            onClose: (secId, rowId, direction) => {

            },
            onOpen: (secId, rowId, direction) => {

            },
            right: [
                {
                    onPress: () => {

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index
        }
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <AntDesign
                name='home'
                type='font-awesome'
                size={24}
                style={{ color: tintColor }}
                containerStyle={{ width: width(10) }}
            />
        )
    }

    renderImages = ({ item }) => {
        return (
            <View>
                <Image style={styles.ads} source={item.IMG} />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ height: '8%', backgroundColor: '#fff', shadowColor: "#000" }}>

                    <View style={{ marginLeft: wp('5%'), marginTop: 17 }}>
                        <Icon name='arrowleft' color='#B1B1B1' size={25}
                            onPress={
                                () => this.props.navigation.goBack(null)
                            } />
                    </View>

                </View>

                <ScrollView>
                    <View>
                        <FlatList
                            pagingEnabled
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.Sliderimages}
                            renderItem={this.renderImages}
                            keyExtractor={item => item.id}
                        />

                        <View style={{ padding: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Hey, I am Usman</Text>
                            <Text style={{ fontSize: 17, marginTop: 10 }}>26 years old, in National Health Laboratories (7.1 mi)</Text>
                        </View>

                        <View style={{ padding: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>I speak</Text>
                            <Text style={{ fontSize: 17, marginTop: 10, }}>English</Text>
                        </View>

                        <View style={{ padding: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>About me</Text>
                            <Text style={{ fontSize: 17, marginTop: 10, }}>National Health Laboratories</Text>
                        </View>
                    </View>


                </ScrollView>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('message')} style={{ backgroundColor: '#EB3007' }}>
                    <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', padding: 10 }}>CHAT NOW</Text>
                </TouchableOpacity>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    card: {
        width: '100%',
        height: wp('32%'),
        marginTop: 25,
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    card2: {
        backgroundColor: '#23a7d5',
        width: wp('30%'),
        height: '95%',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        alignSelf: 'center'
    },
    icon: {
        width: 70,
        height: 80,
        alignSelf: 'center',
        marginTop: 10,
    },
    icontext: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    cardtext: {
        width: '100%',
        height: wp('0%'),
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    ads: {
        width: WIDTH,
        height: 350,
        alignSelf: 'center',
    },
});