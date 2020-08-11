import React from 'react';
import { Card } from 'react-native-elements';
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

function Contact() {
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
        </Card>
      </Animatable.View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textItem: {
    margin:10
  },
});

export default Contact