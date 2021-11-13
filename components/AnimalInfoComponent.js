import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function AnimalInfo(props) {
    return <RenderAnimal animal={props.animal} />;
}

export default AnimalInfo;