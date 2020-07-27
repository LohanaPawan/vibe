import React from 'react';
import { StyleSheet, TextInput, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, AsyncStorage, ActivityIndicator } from 'react-native';

import { Icon } from 'react-native-elements';
import { Avatar, Card, IconButton, List, Button, TouchableRipple, } from 'react-native-paper';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class message extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            chat: [
                {id:1, Sender:1, message:'hello'},
                {id:2, Sender:3, message:'hi'},
            ],
            USERID:1
        };
    }


    renderDayRow = ({ item }) => {
        if (item.Sender == this.state.USERID) {
            return (
                <View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '70%', padding: 10 }}>
                            <Text style={{
                                backgroundColor: '#fff', shadowColor: "#000",
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,

                                elevation: 3,

                                padding: 10,
                                borderBottomRightRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomLeftRadius: 10
                            }}>
                                {item.message}
                            </Text>
                        </View>
                    </View>


                </View>
            )
        }
        else {
            return (
                <View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '30%' }}></View>
                        <View style={{ width: '70%', padding: 10 }}>
                            <Text style={{ color: 'white', backgroundColor: '#fe0000', padding: 10, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }}>
                                {item.message}
                            </Text>
                        </View>
                    </View>
                </View>
            )

        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                
                <View style={{ backgroundColor: '#f4f4f8', }}>
                    <View style={{ marginTop: hp('1%'), marginBottom: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                            <View style={{marginTop:10}}>
                                <Icon name='arrowleft' color='#b1b1b1' size={26} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>
                    <FlatList
                        pagingEnabled
                        data={this.state.chat}
                        renderItem={this.renderDayRow}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
                
                <KeyboardAvoidingView behavior='padding' >
                    <View style={{ flexDirection: 'row', backgroundColor: '#f4f4f8', marginHorizontal: wp('2%'), height: hp('9%'), marginBottom: hp('1%'), padding: 7 }}>
                        
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TextInput
                                    placeholder={'Type a message'}
                                    style={{ backgroundColor: '#fff', borderRadius: 5, padding: 10, height: hp('7%'), width: wp('80%') }}
                                    onChangeText={message => this.setState({ message })}
                                    multiline={true}
                                    value={this.state.message}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: wp('3.5%') }}>

                                <View style={{ justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.register()}>
                                        <FontAwesome
                                            name='paper-plane'
                                            type='font-awesome'
                                            color='#5f5d70'
                                            size={22}
                                            containerStyle={{ width: width(10) }}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        
                    </View>
                </KeyboardAvoidingView>
            </View >
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
    header: {
        backgroundColor: '#7C0003',
        padding: 20,
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    headerText: {
        color: 'white'
    },
    userList: {
        padding: 8,
        backgroundColor: 'white',
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    country: {
        fontSize: 14
    },
    login: {
        fontSize: 11,
        color: 'gray'
    },
    profile: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 12,
        color: '#7c0003'
    },
    image: {
        width: 55,
        height: 55,
        marginRight: 15,
        borderRadius: 50,
        marginTop: -5
    },
    flag: {
        fontWeight: 'bold',
        width: 23,
        height: 23,
        color: 'white',
        backgroundColor: '#7C0003',
        borderRadius: 50,
        paddingLeft: 7,
        paddingTop: 1,
        marginLeft: wp('30%'),
        marginTop: wp('3%')
    },
    input: {
        marginHorizontal: wp('1%'),
        backgroundColor: '#fff',
        padding: 10,
        width: '80%',
        height: 40,
        borderRadius: 5
    },

});