import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, Tile, ListItem } from 'react-native';
import { Card, Icon } from 'react-native-elements';
// import { ANIMALS } from '../shared/animals';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';

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
                <Text style={{margin: 10}}>
                    Size: {animal.size}
                </Text>
                <Text style={{margin: 10}}>
                    Age: {animal.age}
                </Text>
                <Text style={{margin: 10}}>
                    Breed: {animal.breed}
                </Text>
                <Text style={{margin: 10}}>
                    Gender: {animal.gender}
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
                {/* <Card 
                    featuredTitle={animal.name}
                    image={{uri: baseUrl + animal.morePics[0].image}}
                />
                <Card 
                    featuredTitle={animal.morePics.length}
                    image={{uri: baseUrl + animal.morePics[1].image}}
                /> */}
                    {/* <Text style={{margin: 10}}>
                        {animal.description}
                    </Text> */}
                
            </Card>
        );
    }
    return <View />;
}

function RenderAnimal2(props) {

    const { animal } = props;
    console.log(JSON.stringify(animal.morePics.length));
    for(let a = 0; a<animal.morePics.length; a++) { 
        return (
            <Card 
                featuredTitle={animal.name}
                image={{uri: baseUrl + animal.morePics[a].image}}
            />
        );
    }
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
        // const morePics = animal.morePics;
        const renderMorePicsItem = ({item}) => {
            return (
                <Card
                    image={{uri: baseUrl + item.image}}
                />
            );
        };
        // console.log(JSON.stringify(morePics));
        return (
            <Animatable.View animation="fadeInRightBig" duration={2000}>

                <ScrollView>
                        <RenderAnimal animal={animal} 
                            favorite={this.props.favorites.includes(animalId)}
                            markFavorite={() => this.markFavorite(animalId)}
                        />
                        <FlatList
                            data={animal.morePics}
                            renderItem={renderMorePicsItem}
                            keyExtractor={item => item.id2.toString()}
                        />
                        {/* <RenderAnimal2 animal={animal} /> */}
                </ScrollView>
            </Animatable.View>
        )
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalInfo);