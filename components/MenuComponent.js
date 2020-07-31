import React, { Component } from 'react';
import { View, FlatList, DevSettings } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {

  const renderMenuItem = ({item, index}) => {
    return(
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        hideChevron={true}
        leftAvatar={{ source: require('./images/uthappizza.png') }}>
      </ListItem>
    )
  }

  return(
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={item => item.id.toString()}>
    </FlatList>
  )
}

export default Menu;