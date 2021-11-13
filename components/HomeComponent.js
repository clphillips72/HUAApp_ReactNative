import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { ANIMALS } from '../shared/animals';
import { SHOPPINGPARTNERS } from '../shared/shoppingPartners';
import { PARTNERS } from '../shared/partners';


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/noahwild.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animals: ANIMALS,
            shoppingPartners: SHOPPINGPARTNERS,
            partners: PARTNERS
        };
    }
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.animals.filter(animal => animal.featured)[0]}
                />
                <RenderItem 
                    item={this.state.shoppingPartners.filter(shoppingPartner => shoppingPartner.featured)[0]}
                />
                <RenderItem 
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;