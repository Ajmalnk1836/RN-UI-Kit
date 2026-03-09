import { View,TouchableOpacity,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
function HeaderButton({iconName, onPress}){
    return  <View style={styles.iconBox}>
        <TouchableOpacity  onPress={onPress} >
            <Ionicons name={iconName} size={18} color="#555"/>
        </TouchableOpacity>
    </View>
}

export default HeaderButton;const styles = StyleSheet.create({

iconBox:{
       borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,        // ← rounded corners
    padding: 6,              // ← minimal spacing around icon
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,          // ← spacing between icons 
}
})