import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    alarm_items:{
        marginTop: 2,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        width:'100%',
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#000',
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:20,
    },

    alarm_item: {
        flex:2,
        fontSize:20,
        alignItems: 'center',
    },

});
export default styles;