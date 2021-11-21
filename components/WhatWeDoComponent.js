import React, { Component} from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { Card } from 'react-native-elements';

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

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        }
    }

    static navigationOptions = {
        title: 'What We Do'
    }

    render() {

        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}                    
                    leftAvatar={{ source: require('./images/adopt-hover.jpg')}}
                />
            );
        };

        return(
            <ScrollView>
                <Mission />
                <Card title="Community Partners">
                    <FlatList
                        data={this.state.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
            );
        }
    }
    
    export default WhatWeDo; 