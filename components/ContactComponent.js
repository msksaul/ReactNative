import React, { Component } from 'react';
import { Card, Button, Icon } from 'react-native-elements';
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {

  sendMail() {
    MailComposer.composeAsync({
      recipients: ['confusion"food.net'],
      subject: 'Enquiry',
      body: 'To whom it may concern:'
    })
  }

  render() {
    return(
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card
            title='Contact'>
            <Text style={styles.textItem}>121, Clear Water Bay Road</Text>
            <Text style={styles.textItem}>Clear Water Bay, Kowloon</Text>
            <Text style={styles.textItem}>HONG KONG</Text>
            <Text style={styles.textItem}>Tel: +852 1234 5678</Text>
            <Text style={styles.textItem}>Fax: +852 8765 4321</Text>
            <Text style={styles.textItem}>Email:confusion@food.net</Text>
            <Button
              title='Send Email'
              buttonStyle={{backgroundColor: '#512DA8'}}
              icon={<Icon name='envelope-o' type='font-awesome' color='white' style={{margin:10}}/>}
              onPress={this.sendMail}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  textItem: {
    margin:10
  },
});

export default Contact