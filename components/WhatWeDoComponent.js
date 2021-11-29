import React, { Component} from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        partners: state.partners
    };
};

function Mission() {
    return(
        <Card title="Our Mission">
            <Text style={{margin: 10}}> 
                Hearts United for Animals is a Smithsonian Award winning, state-of-the-art no-kill shelter
                and sanctuary dedicated to the relief of animal suffering. HUA has rescued over 10,000 dogs from puppy mills, has provided low cost spay/neuter services for over 13,000 patients, provides temporary housing for animals of families fleeing domestic violence. places dogs and cats in wonderful new homes across the country through our JetSet Dogs program, and assists with veterinary expenses of animals in need when their owners have nowhere else to turn. Dogs and cats who cannot be placed due to medical or behavioral issue stay with us forever as Sanctuary Sweethearts.
            </Text>
        </Card>
    )
}

class WhatWeDo extends Component {

    static navigationOptions = {
        title: 'What We Do'
    }

    render() {

        const renderPartner = ({item}) => {
            console.log(item.image)
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}                    
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        if (this.props.partners.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                    <Card
                        title='Community Partners'>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        if (this.props.partners.errMess) {
            return (
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Mission />
                    <Card
                        title='Community Partners'>
                        <Text>{this.props.partners.errMess}</Text>
                    </Card>
                </Animatable.View>
            );
        }

        return(
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Mission />
                <Card title="Community Partners">
                    <FlatList
                        data={this.props.partners.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </Animatable.View>
            );
        }
    }
    
    export default connect(mapStateToProps)(WhatWeDo);