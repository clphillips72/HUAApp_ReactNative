import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, PanResponder, Alert } from 'react-native';
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

    const view = React.createRef();

    const recognizeDrag = ({dx}) => (dx < -200) ? true : false;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            view.current.rubberBand(1000)
            .then(endState => console.log(endState.finished ? 'finished' : 'canceled'));
        },
        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (recognizeDrag(gestureState)) {
                Alert.alert(
                    'Add Favorite',
                    'Are you sure you wish to add ' + animal.name + ' to favorites?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                            onPress: () => console.log('Cancel Pressed')
                        },
                        {
                            text: 'OK',
                            onPress: () => props.favorite ?
                                console.log('Already set as a favorite') : props.markFavorite()
                        }
                    ],
                    { cancelable: false }
                );
            }
            return true;
        }
    });

    if (animal) {
        return (
            <Animatable.View
                animation='fadeInDown'
                duration={2000}
                delay={1000}
                ref={view}
                {...panResponder.panHandlers}>
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
                </Card>
            </Animatable.View>
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
        const renderMorePicsItem = ({item}) => {
            return (
                <Animatable.View
                    animation='fadeInUp'
                    duration={2000}
                    delay={1000}
                >
                    <Card
                        image={{uri: baseUrl + item.image}}
                    />
                </Animatable.View>
            );
        };
        return (
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
            </ScrollView>
        )
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalInfo);