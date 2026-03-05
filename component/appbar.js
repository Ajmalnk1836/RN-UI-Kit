
import {View,Text,StatusBar,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


function Appbar(){
    const insets = useSafeAreaInsets();
    return (
        <>
        <StatusBar backgroundColor="#000" barStyle='dark-content'/>
        <View style={[styles.appbar,{height:56+insets.top}]}>
            <View style={[styles.textfeildContainer,{ marginTop:insets.top+5}]}>
                <TextInput 
                style={styles.input}
                placeholder='Search'
                />
             <View style={styles.iconContainer}>
                  <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="camera-outline" size={22} color="#555" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="mic-outline" size={22} color="#555" />
            </TouchableOpacity>
             </View>

            </View>
        </View>
      
        </>
    );
}


const styles = StyleSheet.create({
appbar:{
    backgroundColor:'#fffff',
    paddingHorizontal:25,
    paddingBottom:10,
    justifyContent:'center',

},
textfeildContainer:{
    width:'100%',
    paddingHorizontal:12,
   flexDirection:'row',
    height:40,
    width:'100%',
     borderRadius :12,
    borderWidth:1,
    borderColor:'grey',
      paddinghorizontal:12,

},
input:{
   width:'85%',
    fontSize:16,
    backgroundColor:'white'
},
iconContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'

},
 iconButton: {
        padding: 2,
    },


})


export default Appbar;