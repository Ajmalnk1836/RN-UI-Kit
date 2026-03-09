
import { View,StyleSheet } from "react-native";
function Divider(){
    return <View style={styles.divider} />
}

export default Divider;

const styles = StyleSheet.create({
    divider: {
    width: '100%',
    height: 1,              
    backgroundColor: '#ccc',

}
})