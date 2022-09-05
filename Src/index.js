import React from 'react'
import Clock from './Clock';
import Alarm from './Alarm';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor:'#dbd9d9',
          tabBarInactiveBackgroundColor:'#ff3101',
          tabBarActiveTintColor:'#ff3101',
          tabBarInactiveTintColor:'#fff',
          tabBarItemStyle:{
            marginHorizontal:2,
            borderRadius:10,
          },
         
          tabBarIconStyle:{
            display:'none'
          },
          tabBarLabelStyle:{
            flex:1,
            width:94,
            fontSize:14,
            paddingTop:14,
            borderRadius:10,
          }
        }}
      >
        <Tab.Screen name="Báo thức" component={Alarm}/>
        <Tab.Screen name="Đồng hồ" component={Clock}/>
        <Tab.Screen name="Nhắc nhở" component={Alarm}/>
        <Tab.Screen name="Quản lí" component={Clock}/>
      </Tab.Navigator>
    );
  }

export default MyTabs