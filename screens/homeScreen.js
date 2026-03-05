import { View,Text } from "react-native";
import Appbar from "../component/appbar";


function HomeScreen(){
return <View style={{flex:1,backgroundColor:'white'    }}>
    <Appbar/>
    <Text>Home Screen</Text>
</View>
}

export default HomeScreen;