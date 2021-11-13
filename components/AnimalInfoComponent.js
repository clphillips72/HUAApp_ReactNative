import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ANIMALS } from '../shared/animals';

function RenderAnimal({animal}) {
    if (animal) {
        return (
            <Card 
                featuredTitle={animal.name}
                image={require('./images/noahwild.jpg')}
            >
                <Text style={{margin: 10}}>
                    {animal.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class AnimalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: ANIMALS
        };
    }
    static navigationOptions = {
        title: 'Animal Information'
    }
    render() {
        const animalId = this.props.navigation.getParam('animalId');
        const animal = this.state.animals.filter(animal => animal.id === animalId)[0];
        return <RenderAnimal animal={animal} />;
    }
    
}

export default AnimalInfo;