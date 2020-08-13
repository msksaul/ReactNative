import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, Switch, Button, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as Animatable from 'react-native-animatable';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'

class Reservation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      guests: 1,
      smoking: false,
      date: ''
    }
  }

  toggleAlert() {
    console.log(JSON.stringify(this.state))
    this.resetFrom()
  }

  resetFrom() {
    this.setState({
      guests: 1,
      smoking: false,
      date: ''
    })
  }

  handleReservation() {
    Alert.alert(
      'Your Reservation OK?',
      'Number of Guests: ' + this.state.guests + '\n' +
      'Smoking? ' + this.state.smoking + '\n' +
      'Date and Time: ' + this.state.date,
      [
        {
          text: 'Cancel',
          onPress: () => this.resetFrom()
        },
        {
          text: 'OK',
          onPress: () => {
            this.presentLocalNotification(this.state.date)
          }
        },
      ],
      {cancelable: false}
    )
  }

  async obtainNotificationPremission() {
    let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS)
    if (permission.status !== 'granted') {
      permission = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS)
      if (permission.status !== 'granted') {
        Alert.alert('Permission not granted to show notifications')
      }
    }
    return permission
  }

  async presentLocalNotification(date) {
    await this.obtainNotificationPremission()
    Notifications.presentLocalNotificationAsync({
      title: 'Your Reservation',
      body: 'Reservation for ' + date + ' requested',
      ios: {
        sound: true,
      },
      android: {
        channelId: 'notify',
        color: '#512DA8'
      }
    })
    this.toggleAlert()
  }

  render() {
    return(
      <Animatable.View animation='zoomInUp' duration={1000} delay={1000} style={{flex: 1}}>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number of Guests</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.guests}
            onValueChange={(itemValue, itemIndex) => this.setState({guests: itemValue})}>
            <Picker.Item label='1' value='1'/>
            <Picker.Item label='2' value='2'/>
            <Picker.Item label='3' value='3'/>
            <Picker.Item label='4' value='4'/>
            <Picker.Item label='5' value='5'/>
            <Picker.Item label='6' value='6'/>
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
          <Switch
            style={styles.formItem}
            value={this.state.smoking}
            trackColor='#512DA8'
            onValueChange={(value) => this.setState({smoking: value})}>
          </Switch>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date and Time</Text>
          <DatePicker
            style={{flex: 2, marginRight: 20}}
            date={this.state.date}
            format=''
            mode='datetime'
            placeholder='Select date and time'
            minDate='2020-01-01'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top:4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => this.setState({date: date})}
          />
        </View>
        <View style={styles.formRow}>
          <Button 
            title='Reserve'
            color='#512DA8'
            onPress={() => this.handleReservation()}
            accessibilityLabel='Learn more about this purple button'
          />
        </View>
      </Animatable.View>
    )
  }
};

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1
  },
  modal: {
    justifyContent: 'center',
    margin: 20
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#512DA8',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20
  },
  modalText: {
    fontSize: 18,
    margin: 10
  }
});

export default Reservation;