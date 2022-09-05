import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    edit__body__header:{
        height:'14%',
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:1,
        borderColor:'#d9d7d7',
        
    },

    edit__body__header__title:{
        fontSize:20,
    },

    edit__body__header__exit:{
        paddingHorizontal:14,
        paddingVertical:6,
        fontSize:24,
        color:'#cd564a',
    },

    edit__body__items: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection:'row',
        borderBottomColor:'#d9d7d7',
        borderBottomWidth:1,
    },

    edit__body__item: {
        alignItems: 'center',
    },

    item_add: {
        fontSize:30,
        paddingBottom:10,
        color:'#807f7f',
    },

    item_number: {
        borderWidth:1,
        borderColor:'#d9d7d7',
        paddingHorizontal:14,
        paddingVertical:10,
    },

    item_number__text:{
        fontSize:30,
    },

    item_sub: {
        fontSize:40,
        color:'#807f7f',
    },

    edit__body__repeat:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical:10,
    },

    edit__body__days: {
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height:'8%',
    },

    edit__body__day:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        width:50,
        borderRadius:100,
    },

    edit__container: {
        flex:1,
        paddingHorizontal:20,
    },

    edit__body: {
        flex:12,
        backgroundColor:'#eeeeee',
    },

    edit__footer: {
        flex:2,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#d9d7d7',
        
    },
    footer__button: {
        flex:1,
        backgroundColor:'#006b83',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:24,
        marginHorizontal:6,
        borderRadius:10,
        shadowColor:'#eeeeee',
    },

    footer__button_text: {

    },
});
export default styles;