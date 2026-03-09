import { View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import HeaderButton from './headerButton';
import { useState } from "react";

function HeaderItems(){
    const [isGridView, setIsGridView] = useState(true);
   return  <View style={styles.container}>

   <View style={styles.leftHeader}>
    <HeaderButton iconName="filter-outline" onPress={() => {console.log("filter button pressed")}} />
    <HeaderButton iconName="cart-outline" onPress={() => {console.log("cart button pressed")}} />
    <HeaderButton iconName="cash-outline" onPress={() => {console.log("cash button pressed")}} />
   </View>
   <View style={styles.rightHeader}>
    <View style={[styles.iconBox,{backgroundColor: isGridView ? 'purple':'white'}]}>
     <TouchableOpacity  style={styles.iconButton} onPress={()=> setIsGridView(true)}>
            <Ionicons name="grid-outline" size={18} color={isGridView ?  "white":'grey'}/>
        </TouchableOpacity>
     </View>
      <View style={[styles.iconBox,{backgroundColor: !isGridView ? 'purple':'white'}]}>
     <TouchableOpacity  style={styles.iconButton} onPress={()=> setIsGridView(false)}>
            <Ionicons name="list-outline" size={18} color={!isGridView ?  "white":'grey'}/>
        </TouchableOpacity>
     </View>       
   </View>

    </View>

}
export default HeaderItems;


const styles = StyleSheet.create({
    rightHeader:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-around',
width:'18%',
borderColor:'grey',
borderWidth:1,
borderRadius:6,

    },
container:{
    flexDirection:'row',
    height:35,
 paddingHorizontal:18,
 justifyContent:'space-between',
 marginBottom:10,

},
leftHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
},
iconBox:{
    width:'50%',
    height:'100%',
    borderRadius:6,alignItems:'center',
    justifyContent:'center',
   
   

      
},
iconButton:{
    justifyContent: 'center',
    alignItems: 'center',
    
}
})