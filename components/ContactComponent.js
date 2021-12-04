import React, { Component} from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return(
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <ScrollView>
                    <View>
                        <Text style={styles.loadingHeader}>Contact HUA</Text>
                        <Text style={styles.loadingText}>By Mail</Text>
                        <View>
                            <Text style={styles.loadingText2}>You can write us at:</Text>
                            <Text>Hearts United for Animals</Text>
                            <Text>Box 286</Text>
                            <Text>Auburn, NE 68305
                            </Text>
                        </View>
                        <Text style={styles.loadingText}>By Email</Text><Text></Text>
                        <Text>You can email us at hua@hua.org.  Email inquiries receive the quickest response. </Text><Text></Text> 

                        <Text>Please don't send email with attachments unless it's very clear in the subject line what the attachment is (like an application). We get thousands of emails a day and delete the ones that may be a virus. For the same reason, be sure to include a subject line that doesn't say "Hi" (or something similar) that may appear to be a virus.</Text>
                        <Text style={styles.loadingText}>By Phone or Fax</Text>
                        <Text>You can call us at 402.274.3679.</Text>

                        <Text>You can send a fax to 402.274.3689.</Text>

                        <Text>We'll be waiting!</Text>
                        <Text>Visit HUA</Text>
                        <Text>Visitation Policy</Text>
                        <Text>Once your application is fully approved, we will reach out to schedule a time to visit the shelter and meet your new best friend. Adoption appointment hours are 10 am to 2 pm every day except Wednesdays. We are volunteer administration and need to make sure someone will be available to help you when you arrive. For volunteering and tours, please write to hua@hua.org to schedule a time to visit and obtain directions. We are in the country between Auburn and Nebraska City. We cannot be located via any mapping programs.</Text>
                        <Text>INCLUDE HUA IN ESTATE PLANNING</Text>
                        <Text>If you would like to include Hearts United for Animals in your will or trust, please use our legal name and federal tax ID</Text>
                        <Text>Legal Name: Hearts United for Animals</Text>
                        <Text>Address: PO Box 286</Text>
                        <Text>Auburn, NE 68305</Text>

                        <Text>Federal Tax ID: 47-0773858</Text>

                        <Text>Please call us at 1-402-274-3679 or email at hua@hua.org for additional information</Text>
                    </View>
                </ScrollView>
            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        loadingHeader: {
            color: '#5637DD',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10
        },
        loadingText: {
            color: '#5637DD',
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 5
        }
    }
);

export default Contact;