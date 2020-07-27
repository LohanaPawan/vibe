import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, TextInput, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Icon} from 'native-base'

var radio_props = [
    { value: 0, label: 'Male' },
    { value: 1, label: 'Female' },
];
export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [
                { id: 1, IMG: require('./../image/1.jpg'), Name: 'Usman' },
                { id: 2, IMG: require('./../image/2.jpg'), Name: 'Ali' },
                { id: 3, IMG: require('./../image/3.jpg'), Name: 'Asad' },
                { id: 4, IMG: require('./../image/4.jpg'), Name: 'Umer' },
                { id: 5, IMG: require('./../image/5.jpg'), Name: 'Mudassar' },
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


    renderChat = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('message')}>
                <View style={{ backgroundColor: 'white', width: '100%', flexDirection: 'row', marginTop: 2 }}>
                    <View style={{ width: '30%' }}>
                        <Image style={{ width: 40, height: 40, padding: 30, borderRadius: 50, margin: 10 }} source={item.IMG} />
                    </View>
                    <View style={{ width: '70%' }}>
                        <Text style={{ paddingTop: 30, fontSize: 18, marginLeft: -20, marginTop: -5 }}>{item.Name}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                
                <View style={{ height: 50, backgroundColor: '#fff' }}>
                    <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>

                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.props.navigation.navigate('Profile')}>
                                <Icon name='user' color='#B1B1B1' size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '50%' }}></View>

                    </View>
                </View>

                <ScrollView>
                    <FlatList
                        pagingEnabled
                        data={this.state.chat}
                        renderItem={this.renderChat}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f3f1',
    },
});