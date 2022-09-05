import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Switch, ScrollView } from 'react-native';
import styles from '../Task/editAlarm.style';

const EditAlarm = () => {
const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.edit__container}>
      <View style={styles.edit__body}>
        <View style={styles.edit__body__header}>
          <Text style={styles.edit__body__header__title}>Sửa báo thức</Text>
          <TouchableOpacity>
            <Text style={styles.edit__body__header__exit}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.edit__body__items}>
          <View style={styles.edit__body__item}>
            <Text style={styles.item_add}>
              +
            </Text>
            <View style={styles.item_number}>
              <Text style={styles.item_number__text}>07</Text>
            </View>
            <Text style={styles.item_sub}>
              -
            </Text>
          </View>
          <Text style={{fontSize:30}}>:</Text>
          <View style={styles.edit__body__item}>
            <Text style={styles.item_add}>
              +
            </Text>
            <View style={styles.item_number}>
              <Text style={styles.item_number__text}>07</Text>
            </View>
            <Text style={styles.item_sub}>
              -
            </Text>
          </View>
          <Text style={{fontSize:30}}>:</Text>
          <View style={styles.edit__body__item}>
            <Text style={styles.item_add}>
              +
            </Text>
            <View style={styles.item_number}>
              <Text style={styles.item_number__text}>AM</Text>
            </View>
            <Text style={styles.item_sub}>
              -
            </Text>
          </View>
        </View>
        <View style={styles.edit__body__repeat}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>Lặp lại báo thức</Text>
        </View>
        <View style={styles.edit__body__days}>
          <TouchableOpacity>
            <View style={styles.edit__body__day}>
              <Text>M</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.edit__body__day}>
              <Text>Tu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.edit__body__day}>
              <Text>We</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.edit__body__day}>
              <Text>Th</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.edit__body__day}>
              <Text>Fr</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.edit__body__day}>
              <Text>Sa</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.edit__body__day}>
              <Text>Su</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.edit__footer}>
        <TouchableOpacity style={styles.footer__button}>
          <View>
            <Text style={[styles.footer__button_text,styles.font_white]}>Lưu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footer__button}>
          <View>
            <Text style={[styles.footer__button_text,styles.font_white]}>Hủy</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditAlarm