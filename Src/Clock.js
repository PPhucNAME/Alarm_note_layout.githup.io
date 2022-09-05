import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet,  TouchableOpacity, Text, View, Switch, ScrollView } from 'react-native';
import styles from './Total';
import Task from '../components/Task';

const Clock = () => {
  return (
    <View style={styles.container_clock}>
      <View style={styles.body}>
          <View style={styles.body__content}>
              <View style={styles.body__content__Clock}>
                <Text style={styles.My_Font}>
                  14:05
                </Text>
              </View>
          </View>  
      </View>
    </View>
  )
}

export default Clock