import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Switch, ScrollView } from 'react-native';
import styles from './Total';
import Task from '../components/Task';
import EditAlarm from '../components/Task/editAlarm';

const Alarm = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container_alarm}>
      <View style={styles.body}>
          <View style={styles.body__content}>
            <View style={styles.body__content_Alarm}>
              <ScrollView>
                <Task></Task> 
                <Task></Task>
              </ScrollView>
              <View style={styles.body__content__Alarm__add}>
                <TouchableOpacity>
                  <Text style={styles.text__add__timer}>+</Text>
                </TouchableOpacity>
              </View>
            </View> 
          </View>  
      </View>
    </View>
    // <EditAlarm/>

  )
}

export default Alarm