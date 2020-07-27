import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Modal, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, ProgressBar, RadioButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Icon} from 'native-base'

var radio_props = [
    { value: 0, label: 'Male' },
    { value: 1, label: 'Female' },
];
// const [checked, setChecked] = React.useState(false);
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            p1: false,
            p2: false,
            p3: false,
            p4: false,
            p5: false,
            p6: false,
            p7: false,
            p8: false,
            p9: false,
            p10: false,
            checked: 'first',
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





    render() {
        const { checked } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ScrollView>
                    <View style={{ height: 50, backgroundColor: 'white' }}>
                        <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={{ width: '10%' }}>
                                <Icon name='times' color='#B1B1B1' size={20} />
                            </TouchableOpacity>
                            <View style={{ width: '75%' }}>
                                <TouchableOpacity>
                                    <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -3 }}>Demo</Text>
                                </TouchableOpacity>
                            </View>
                            {/* <TouchableOpacity style={{ width: '10%' }}>
                                <Icon name='cog' color='#B1B1B1' size={20} />
                            </TouchableOpacity> */}

                        </View>
                    </View>

                    <View>
                        <Text style={{ color: '#fe0000', textAlign: 'center', marginTop: 30 }}>6% complete</Text>
                        <Icon name='user' color='#B1B1B1' size={100} style={{ alignSelf: 'center', marginTop: 25 }} />
                        <View style={{ alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => this.setState({ p1: true })} style={{ alignSelf: 'center', backgroundColor: '#fe0000', borderRadius: 50, marginTop: 20 }}>
                                <Text style={{ color: 'white', paddingRight: 30, paddingLeft: 30, paddingTop: 5, paddingBottom: 5 }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: '#fe0000', textAlign: 'center', marginTop: 10 }}>Verify your profile now</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', marginTop: 30 }}>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('subscribe')} style={{ marginRight: 20, marginLeft: 20, marginTop: 20, marginBottom: 5, borderRadius: 5, padding: 10, borderWidth: 1, borderColor: '#fe0000' }}>
                            <Icon name='hand-holding-heart' color='#fe0000' size={40} style={{ alignSelf: 'center', padding: 10 }} />
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Surprise of the day 1/7</Text>
                            <Text style={{ textAlign: 'center', fontSize: 15, color: '#B1B1B1' }}>Get your daily surprise</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('subscribe')} style={{ marginRight: 20, marginLeft: 20, marginTop: 5, marginBottom: 5, borderRadius: 5, padding: 10, borderWidth: 1, borderColor: '#fe0000' }}>
                            <Icon name='dollar-sign' color='#fe0000' size={40} style={{ alignSelf: 'center', padding: 10 }} />
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Buy credit now</Text>
                            <Text style={{ textAlign: 'center', fontSize: 15, color: '#B1B1B1' }}>Balance: 0 credits</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('subscribe')} style={{ marginRight: 20, marginLeft: 20, marginTop: 5, marginBottom: 5, borderRadius: 5, padding: 10, borderWidth: 1, borderColor: '#fe0000' }}>
                            <Icon name='play-circle' color='#fe0000' size={40} style={{ alignSelf: 'center', padding: 10 }} />
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Get free credits</Text>
                            <Text style={{ textAlign: 'center', fontSize: 15, color: '#B1B1B1' }}>Watch videosto earn credits</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

                {/* Modal 1 -- Start -- */}
                <Modal visible={this.state.p1}>
                    <View>
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p1: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <ProgressBar style={{ height: 7, width: '100%' }} progress={0.1} color={'#EB3007'} />
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='file-contract' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 50 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Hey, we're VEIBES How about you?</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 0 }}>
                                <TextInput
                                    style={styles.input}
                                    theme={{
                                        colors: {
                                            primary: '#EB3007',
                                        }
                                    }}
                                    placeholder="What would you like to be called?"
                                    placeholderTextColor={'#BFBFBF'}
                                    value={this.state.first}
                                    onChangeText={first => this.setState({ first })}
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p1:false, p2:true})}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 1 -- End -- */}

                {/* Modal 2 -- Start -- */}
                <Modal visible={this.state.p2}>
                    <View>
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p2: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <ProgressBar style={{ height: 7, width: '100%' }} progress={0.2} color={'#EB3007'} />
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='location-arrow' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 50 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Why are you here?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 20 }}>

                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'first' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Acquaintances</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>

                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'second' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Flirt & Date</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'third' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Messages</Text>

                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p2:false, p3:true})}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 2 -- End -- */}

                {/* Modal 3 -- Start -- */}
                <Modal visible={this.state.p3}>
                    <View>
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p3: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <ProgressBar style={{ height: 7, width: '100%' }} progress={0.3} color={'#EB3007'} />
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='user' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 50 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Say something about yourself</Text>
                                <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10, color: '#B1B1B1' }}>The community and us just can't get enough of you. Tell us a bit more about yourself.</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
                                <TextInput
                                    style={styles.input}
                                    theme={{
                                        colors: {
                                            primary: '#EB3007',
                                        }
                                    }}
                                    placeholder="Write About Your Self"
                                    placeholderTextColor={'#BFBFBF'}
                                    value={this.state.first}
                                    onChangeText={first => this.setState({ first })}
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p3:false, p4:true})}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 3 -- End -- */}

                {/* Modal 4 -- Start -- */}
                <Modal visible={this.state.p4}>
                    <View>
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p4: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <ProgressBar style={{ height: 7, width: '100%' }} progress={0.4} color={'#EB3007'} />
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='text-height' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 50 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>How tall are you?</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 0, borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 25 }}>
                                <Picker style={{ height: 30, color: 'black', width: '90%', height: 30, }}
                                    selectedValue={this.state.gender}
                                    onValueChange={(itemValue) =>
                                        this.setState({ gender: itemValue })}>
                                    <Picker.Item label="Height in (ft)" value="" />
                                    <Picker.Item label="4.1" value="4.1" />
                                    <Picker.Item label="4.0" value="4.0" />
                                    <Picker.Item label="4.2" value="4.2" />
                                    <Picker.Item label="4.3" value="4.3" />
                                    <Picker.Item label="4.4" value="4.4" />
                                    <Picker.Item label="4.5" value="4.5" />
                                    <Picker.Item label="4.6" value="4.6" />
                                    <Picker.Item label="4.7" value="4.7" />
                                    <Picker.Item label="4.8" value="4.8" />
                                    <Picker.Item label="4.9" value="4.9" />
                                    <Picker.Item label="5.0" value="5.0" />
                                    <Picker.Item label="5.1" value="5.1" />
                                    <Picker.Item label="5.2" value="5.2" />
                                    <Picker.Item label="5.3" value="5.3" />
                                    <Picker.Item label="5.4" value="5.4" />
                                    <Picker.Item label="5.5" value="5.5" />
                                    <Picker.Item label="5.6" value="5.6" />
                                    <Picker.Item label="5.7" value="5.7" />
                                    <Picker.Item label="5.8" value="5.8" />
                                    <Picker.Item label="5.9" value="5.9" />
                                    <Picker.Item label="6.0" value="6.0" />
                                    <Picker.Item label="6.1" value="6.1" />
                                    <Picker.Item label="6.2" value="6.2" />
                                    <Picker.Item label="6.3" value="6.3" />
                                    <Picker.Item label="6.4" value="6.4" />
                                    <Picker.Item label="6.5" value="6.5" />
                                    <Picker.Item label="6.6" value="6.6" />
                                    <Picker.Item label="6.7" value="6.7" />
                                    <Picker.Item label="6.8" value="6.0" />
                                    <Picker.Item label="6.9" value="6.0" />
                                    <Picker.Item label="7.0" value="7.0" />
                                </Picker>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p4:false, p5:true})}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 4 -- End -- */}

                {/* Modal 5 -- Start -- */}
                <Modal visible={this.state.p5}>
                    <View>
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p5: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <ProgressBar style={{ height: 7, width: '100%' }} progress={0.5} color={'#EB3007'} />
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='baby-carriage' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 50 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Do you have children?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 20 }}>

                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'first' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Not specified</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>

                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'second' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Don't live in my household</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'third' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Living at home</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="four"
                                    status={checked === 'four' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'four' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>No children</Text>

                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p5:false, p6:true})}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 5 -- End -- */}

                {/* Modal 6 -- Start -- */}
                <Modal visible={this.state.p6}>
                    <View>
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p6: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <ProgressBar style={{ height: 7, width: '100%' }} progress={0.6} color={'#EB3007'} />
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='home' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 50 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>What is your living situation?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 20 }}>

                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'first' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Not specified</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>

                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'second' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Alone</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'third' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>In a shared apartment</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="four"
                                    status={checked === 'four' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'four' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>In a student dormitory</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="five"
                                    status={checked === 'five' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'five' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>With my parents</Text>

                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p6:false, p7:true})}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 6 -- End -- */}

                {/* Modal 7 -- Start -- */}
                <Modal visible={this.state.p7}>
                    <View>
                    
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p7: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <ProgressBar style={{ height: 7, width: '100%' }} progress={0.7} color={'#EB3007'} />
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='smoking' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 50 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Smoker?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 20 }}>

                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'first' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Not specified</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>

                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'second' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Ex-smoker</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'third' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Non-smoker</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="four"
                                    status={checked === 'four' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'four' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Occasional smoker</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="five"
                                    status={checked === 'five' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'five' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Smoker</Text>

                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p7:false, p8:true})}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 7 -- End -- */}

                {/* Modal 8 -- Start -- */}
                <Modal visible={this.state.p8}>
                    <View>
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p8: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <ProgressBar style={{ height: 7, width: '100%' }} progress={0.8} color={'#EB3007'} />
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='book' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 30 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>What is your highest education qualification?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 20 }}>

                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'first' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Not specified</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>

                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'second' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Graduate / Doctoral / Master</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'third' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>High school</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="four"
                                    status={checked === 'four' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'four' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>High school diploma</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="five"
                                    status={checked === 'five' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'five' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>In-company training</Text>

                            </View>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>

                                <RadioButton
                                    value="seven"
                                    status={checked === 'seven' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'seven' }); }}
                                />

                                <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>Some university</Text>

                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p8:false, p9:true})}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 8 -- End -- */}

                {/* Modal 9 -- Start -- */}
                <Modal visible={this.state.p9}>
                    <View>
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p9: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <ProgressBar style={{ height: 7, width: '100%' }} progress={1} color={'#EB3007'} />
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='briefcase' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 50 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>What is your current job?</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 0 }}>
                                <TextInput
                                    style={styles.input}
                                    theme={{
                                        colors: {
                                            primary: '#EB3007',
                                        }
                                    }}
                                    placeholder="Write Current Job?"
                                    placeholderTextColor={'#BFBFBF'}
                                    value={this.state.first}
                                    onChangeText={first => this.setState({ first })}
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p9:false, p10:true})}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 9 -- End -- */}

                {/* Modal 10 -- Start -- */}
                <Modal visible={this.state.p10}>
                    <View>
                        <View style={{ height: 50, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                            <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ p10: false })} style={{ width: '10%' }}>
                                    <Icon name='times' color='#B1B1B1' size={20} />
                                </TouchableOpacity>
                                <View style={{ width: '75%' }}>
                                    {/* <TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: -1 }}>Complete Your Profile</Text>
                                    </TouchableOpacity> */}
                                </View>
                            </View>
                        </View>
                        
                        <ScrollView>

                            <View style={{ padding: 20 }}>
                                <Icon name='handshake' color='#fe0000' size={50} style={{ alignSelf: 'center', marginTop: 50 }} />
                                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>That's it?</Text>
                                <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10, color: '#B1B1B1' }}>If you reveal more about yourself, you
                                    will seem more approachable and make 
                                    it easier for others to react out to you. I
                                    bet you are curious to get to know other
                                    people too, right?
                                </Text>
                            </View>
                        
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({p10:false})}>
                                <Text style={styles.buttonText}>Finish</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </Modal>
                {/* Modal 10 -- End -- */}

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
        height: 450,
        alignSelf: 'center',
    },
    input: {
        backgroundColor: '#fff',
        width: '75%',
        textAlign: 'center'
    },
    button: {
        marginTop: hp('5%'),
        alignItems: 'center',
        backgroundColor: '#fe0000',
        borderRadius: wp('1%'),
        height: 40,
        marginHorizontal: wp('10%'),
    },
    buttonText: {

        fontSize: 18,
        color: '#fff',
        marginTop: hp('1%'),
    },
});