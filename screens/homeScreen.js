
import { View, Text, FlatList, StyleSheet } from "react-native";

import Appbar from "../component/appbar";
import HeaderItems from "../component/HeaderItems";
import Productcard from "../component/productCard";
import ProductList from "../component/productList";

function HomeScreen(){
return <View style={{flex:1,  backgroundColor:'white' }}>
    <Appbar/>
    <HeaderItems/>
     <PrdctList />
   
</View>
}

export default HomeScreen;





const dummyData = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 1' },
    { id: '8', title: 'Item 2' },
    { id: '9', title: 'Item 3' },
    { id: '12', title: 'Item 4' },
    { id: '13', title: 'Item 5' },
    { id: '14', title: 'Item 6' },
    
];

function PrdctList() {
    return (
        <FlatList
            data={dummyData}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
            columnWrapperStyle={styles.row}
            scrollEventThrottle={16}
            removeClippedSubviews={true}
            maxToRenderPerBatch={10}
            updateCellsBatchingPeriod={50}
            renderItem={({ item }) => (
                 <Productcard/>
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
         paddingHorizontal: 10,
    },
    row: {
         justifyContent: 'space-around',
       marginBottom: 0,
        
    },
    card: {

    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

