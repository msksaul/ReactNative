import React from 'react';
import { Card } from 'react-native-elements';
import { Text, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Contact() {
  return(
    <ScrollView>
      <Card
        featuredTitle='Contact'>
        <View style={styles.textTitle}><Text style={{fontWeight:'bold', fontSize:18}}>Contact Information</Text></View>
        <Text style={styles.textItem}>121, Clear Water Bay Road</Text>
        <Text style={styles.textItem}>Clear Water Bay, Kowloon</Text>
        <Text style={styles.textItem}>HONG KONG</Text>
        <Text style={styles.textItem}>Tel: +852 1234 5678</Text>
        <Text style={styles.textItem}>Fax: +852 8765 4321</Text>
        <Text style={styles.textItem}>Email:confusion@food.net</Text>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textItem: {
    paddingTop: 20,
    paddingBottom: 10
  },
  textTitle: {
    paddingBottom: 15,
    alignItems: 'center',
    fontSize: 18,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  }
});

export default Contact