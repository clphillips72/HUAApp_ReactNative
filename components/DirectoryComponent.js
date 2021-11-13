import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ANIMALS } from '../shared/animals';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: ANIMALS
        }
    }

    static navigationOptions = {
        title: 'Directory'
    }

    
    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('AnimalInfo', { animalId: item.id })}
                    leftAvatar={{ source: require('./images/noahwild.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.animals}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;