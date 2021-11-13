import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Directory from './DirectoryComponent';
import AnimalInfo from './AnimalInfoComponent';
import { ANIMALS } from '../shared/animals';
import Constants from 'expo-constants';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        AnimalInfo: { screen: AnimalInfo }
    }, 
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: ANIMALS,
            selectedAnimal: null
        };
    }

    onAnimalSelect(animalId) {
        this.setState({selectedAnimal: animalId});
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;