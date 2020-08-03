import React, { Component } from 'react';
import { Card, ListItem } from 'react-native-elements';
import { Text, StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LEADERS from '../shared/leaders';

function History() {
  return(
    <Card>
      <View style={stylesH.textTitle}><Text style={{fontWeight:'bold', fontSize:18}}>Our History</Text></View>
      <Text style={stylesH.textItem}>Started in 2010, Ristorante con Fusion quickly established 
                                    itself as a culinary icon par excellence in Hong Kong. With 
                                    its unique brand of world fusion cuisine that can be found 
                                    nowhere else, it enjoys patronage from the A-list clientele 
                                    in Hong Kong.  Featuring four of the best three-star Michelin 
                                    chefs in the world, you never know what will arrive on your 
                                    plate the next time you visit us.</Text>
      <Text style={stylesH.textItem}>The restaurant traces its humble beginnings to The Frying Pan, 
                                    a successful chain started by our CEO, Mr. Peter Pan, that 
                                    featured for the first time the world's best cuisines in a pan.</Text>
    </Card>
  )
}

const stylesH = StyleSheet.create({
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
})

const Item = ({ title, designation, description }) => {
  return (
    <Card
      featuredTitle={title}
      featuredSubtitle={designation}
      image={require('./images/alberto.png')}>
      <Text style={{margin: 10}}>
        {description}
      </Text>
    </Card>
  )
}

const stylesL = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leaders: LEADERS
    }
  }
  render() {
    const renderLeaderItem = ({ item }) => {
        <Item
          title={item.name}
          designation={item.designation}
          description={item.description}>
        </Item>
    }
    return(
      <SafeAreaView style={stylesL.container}>
        <FlatList
          data={this.state.leaders}
          renderItem={renderLeaderItem}
          keyExtractor={item => item.id}>
        </FlatList>
        <History/>
      </SafeAreaView>
    )
  }
}

export default About;