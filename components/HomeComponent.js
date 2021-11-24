import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { ANIMALS } from '../shared/animals';
import { SHOPPINGPARTNERS } from '../shared/shoppingPartners';
import { PARTNERS } from '../shared/partners';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        animals: state.animals,
        shoppingPartners: state.shoppingPartners,
        partners: state.partners
    };
};

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}
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

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.props.animals.animals.filter(animal => animal.featured)[0]}
                />
                <RenderItem 
                    item={this.props.shoppingPartners.shoppingPartners.filter(shoppingPartner => shoppingPartner.featured)[0]}
                />
                <RenderItem 
                    item={this.props.partners.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);