import { View,Text,FlatList ,StyleSheet} from "react-native";
import Productcard from "./productCard";
function ProductList(){

    const products = [
    { id: '1', name: 'Product 1', price: '100', image: 'https://...' },
    { id: '2', name: 'Product 2', price: '200', image: 'https://...' },
    { id: '3', name: 'Product 3', price: '300', image: 'https://...' },
    { id: '4', name: 'Product 4', price: '400', image: 'https://...' },
       { id: '5', name: 'Product 3', price: '300', image: 'https://...' },
    { id: '6', name: 'Product 4', price: '400', image: 'https://...' },
    
];
return <View style={{ height:"70%",}}>
    <FlatList
data={products}
keyExtractor={(item)=> item.id}
numColumns={2}
 showsVerticalScrollIndicator={false} 
renderItem={({item})=>
(
   <Productcard/>
)
}
/>
</View>

}
export default ProductList;
const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 80,        // ← extra space at bottom while scrolling
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 12,
    },
});