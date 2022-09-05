import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import styles from './style';
const Task = () => {
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <TouchableOpacity onPress={() => alert('xin chao')}>
        <View style={styles.alarm_items}>
        <Text style={[styles.My_Font,styles.alarm_item]}>
            14:05
        </Text>
        <View>
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        </View>
    </View>
    </TouchableOpacity>
  )
}


export default Task;
