import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet,
    Picker, Button, Modal, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

class SearchAnimals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            animalSize:    null,
            animalAge:     null,
            animalBreed:   null,
            animalGender:  null,
            showModal:     false
        };
    }

    static navigationOptions = {
        title: 'Search Animals'
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleSearch() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();

        // Alert.alert(
        //     'Begin Search?',
        //     'Number of Campers: ' + this.state.campers + "\n" +
        //     'Hike in? ' + this.state.hikeIn + "\n" +
        //     'Date: ' + this.state.date,
        //     [
        //         {
        //             text: 'Cancel',
        //             style: 'cancel',
        //             onPress: () => this.resetForm()
        //         },
        //         {
        //             text: 'OK',
        //             onPress: () => {
        //                 this.presentLocalNotification(this.state.animalSize);
        //                 this.resetForm();
        //             }
        //         }
        //     ],
        //     { cancelable: false }
        // );
    }

    async presentLocalNotification(animalSize, animalAge, animalBreed, animalGender) {
        function sendNotification() {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true
                })
            });

            Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Your Animal Search',
                    body: `Search for size: ${animalSize}, age: ${animalAge}, breed: ${animalBreed} and gender: ${animalGender} requested`
                },
                trigger: null
            });
        }

        let permissions = await Notifications.getPermissionsAsync();
        if (!permissions.granted) {
            permissions = await Notifications.requestPermissionsAsync();
        }
        if (permissions.granted) {
            sendNotification();
        }
    }

    resetForm() {
        this.setState({
            animalSize:    null,
            animalAge:     null,
            animalBreed:   null,
            animalGender:  null,
            showModal:     false
        });
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Animal Size</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.animalSize}
                        onValueChange={itemValue => this.setState({animalSize: itemValue})}
                    >
                        <Picker.Item label='Select' value='Not Selected' />
                        <Picker.Item label='Giant' value='Giant' />
                        <Picker.Item label='Large' value='Large' />
                        <Picker.Item label='Medium' value='Medium' />
                        <Picker.Item label='Small' value='Small' />
                        <Picker.Item label='Tiny' value='Tiny' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Animal Age</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.animalAge}
                        onValueChange={itemValue => this.setState({animalAge: itemValue})}
                    >
                        <Picker.Item label='Select' value='Not Selected' />
                        <Picker.Item label='Baby' value='Baby' />
                        <Picker.Item label='Youngster' value='Youngster' />
                        <Picker.Item label='Adult' value='Adult' />
                        <Picker.Item label='Senior' value='Senior' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Animal Breed</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.animalBreed}
                        onValueChange={itemValue => this.setState({animalBreed: itemValue})}
                    >
                        <Picker.Item label='Select' value='Not Selected' />
                        <Picker.Item label='Beagle Mix' value='Beagle Mix' />
                        <Picker.Item label='Boxer' value='Boxer' />
                        <Picker.Item label='Chihuahua' value='Chihuahua' />
                        <Picker.Item label='German Shepherd' value='German Shepherd' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Animal Gender</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={
                            this.state.animalGender,
                            this.state.animalAge,
                            this.state.animalBreed,
                            this.state.animalGender
                        }
                        onValueChange={itemValue => this.setState({animalGender: itemValue})}
                    >
                        <Picker.Item label='Select' value='Not Selected' />
                        <Picker.Item label='Male' value='Male' />
                        <Picker.Item label='Female' value='Female' />
                    </Picker>
                </View>
                
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleSearch()}
                        title='Search'
                        color='#5637DD'
                        accessibilityLabel='Tap me to search animals'
                    />
                </View>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Search Animals</Text>
                        <Text style={styles.modalText}>
                            Animal Size: {this.state.animalSize}
                        </Text>
                        <Text style={styles.modalText}>
                            Animal Age: {this.state.animalAge}
                        </Text>
                        <Text style={styles.modalText}>
                            Animal Breed: {this.state.animalBreed}
                        </Text>
                        <Text style={styles.modalText}>
                            Animal Gender: {this.state.animalGender}
                        </Text>
                        <Button
                            onPress={() => {
                                this.toggleModal();
                                this.presentLocalNotification(this.state.animalSize, this.state.animalAge, this.state.animalBreed, this.state.animalGender);
                                this.resetForm();
                            }}
                            color='#5637DD'
                            title='Search'
                        />
                        <Button
                            onPress={() => {
                                this.toggleModal();
                                this.resetForm();
                            }}
                            color='#5637DD'
                            title='Close'
                        />
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});


export default SearchAnimals;