import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import AnimalInfo from './AnimalInfoComponent';
import { ANIMALS } from '../shared/animals';
import { View } from 'react-native';

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
            <View style={{flex: 1}}>
                <Directory 
                    animals={this.state.animals} 
                    onPress={animalId => this.onAnimalSelect(animalId)}
                />
                <AnimalInfo
                    animal={this.state.animals.filter(
                        animal => animal.id === this.state.selectedAnimal)[0]}
                />
                
            </View>
        )
    }
}

export default Main;