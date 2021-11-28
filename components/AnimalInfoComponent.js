import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ANIMALS } from '../shared/animals';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        animals: state.animals,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: animalId => (postFavorite(animalId))
};

function RenderAnimal(props) {

    const { animal } = props;

    if (animal) {
        return (
            <Card 
                featuredTitle={animal.name}
                image={{uri: baseUrl + animal.image}}
            >
                <Text style={{margin: 10}}>
                    {animal.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                    console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

class AnimalInfo extends Component {

    static navigationOptions = {
        title: 'Animal Information'
    }

    markFavorite(animalId) {
        this.props.postFavorite(animalId);
    }

    render() {
        const animalId = this.props.navigation.getParam('animalId');
        const animal = this.props.animals.animals.filter(animal => animal.id === animalId)[0];
        return (
            <ScrollView>
                <RenderAnimal animal={animal} 
                    favorite={this.props.favorites.includes(animalId)}
                    markFavorite={() => this.markFavorite(animalId)}
                />
            </ScrollView>
        )
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalInfo);