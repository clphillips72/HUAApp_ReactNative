import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet,
    Picker, Switch, Button } from 'react-native';

class SearchAnimals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            animalSize:    null,
            animalAge:     null,
            animalBreed:   null,
            animalGender:  null
        };
    }

    static navigationOptions = {
        title: 'Search Animals'
    }

    handleSearch() {
        console.log(JSON.stringify(this.state));
        this.setState({
            animalSize:    null,
            animalAge:     null,
            animalBreed:   null,
            animalGender:  null 
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
                        <Picker.Item label='Select' value='0' />
                        <Picker.Item label='Giant' value='1' />
                        <Picker.Item label='Large' value='2' />
                        <Picker.Item label='Medium' value='3' />
                        <Picker.Item label='Small' value='4' />
                        <Picker.Item label='Tiny' value='5' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Animal Age</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.animalAge}
                        onValueChange={itemValue => this.setState({animalAge: itemValue})}
                    >
                        <Picker.Item label='Select' value='0' />
                        <Picker.Item label='Baby' value='1' />
                        <Picker.Item label='Youngster' value='2' />
                        <Picker.Item label='Adult' value='3' />
                        <Picker.Item label='Senior' value='4' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Animal Breed</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.animalBreed}
                        onValueChange={itemValue => this.setState({animalBreed: itemValue})}
                    >
                        <Picker.Item label='Select' value='0' />
                        <Picker.Item label='Beagle Mix' value='1' />
                        <Picker.Item label='Boxer' value='2' />
                        <Picker.Item label='Chihuahua' value='3' />
                        <Picker.Item label='German Shepherd' value='4' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Animal Gender</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.animalGender}
                        onValueChange={itemValue => this.setState({animalGender: itemValue})}
                    >
                        <Picker.Item label='Select' value='0' />
                        <Picker.Item label='Male' value='1' />
                        <Picker.Item label='Female' value='2' />
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
    }
});


export default SearchAnimals;