import { View ,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
function Productcard() {
   const prdctUrl = 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc4dcb8e0/images/hi-res/513218PPZAAA00_1.jpg';
    return <View style={styles.container}>     
  {/* prodcust card column include image with unitleft */}
    <View style={styles.productImageCard}>
        {/* image section - set 85 % height*/}
        <View style={styles.image}>
            <Image source={{uri: prdctUrl}} style={styles.networkImage} />
        </View>

         {/* unit left - set 85 % height*/}
        <View style={styles.unitLeft}>
           <Text style={styles.unitLeftText}>3 units left</Text>
        </View>

    </View>

{/* price details and cart button section */}
    <View style={styles.prdctDetails}>
         {/* description  and price details*/}
        <View style={styles.des}>
            <View style={styles.desName}>
                <Text>22kt Gold stone earning 2</Text>
            </View>
            <View>
                <Text > 4#</Text>
            </View>

     </View>

        <View>
            <Text style={styles.prizeText}>£400798</Text>
        </View>

          {/* add to cart section*/}
        <View style={styles.addToCart}>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add to Card</Text>
            </TouchableOpacity>
        </View>
    </View>
</View>
}

export default Productcard;

const styles = StyleSheet.create({
container :{
    margin:12,
   height:"80%",
 width:"42%",
    // backgroundColor:'red',

},
productImageCard:{
    width:"100%",
   height: "65%",
    borderRadius:12,
    borderColor:'#ccc',
    borderWidth:1,
    overflow:'hidden',
    backgroundColor:'red',

},
image:{
    width:"100%",
    height:'90%',
},
networkImage:{
    width:"100%",
    height:"100%",
    resizeMode:'cover',
},
unitLeft:{
    width:"100%",
    flex:1,
    justifyContent:'center',
    backgroundColor:'orange',
},
unitLeftText:{
    textAlign:'center',
    fontWeight:'medium',
    fontSize:12,
},
prdctDetails:{
    justifyContent:'space-evenly',
    flex:1,
    marginTop:5,
},
des:
{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    marginBottom:5,
    
},
desName:{
   width:'70%',
},
prizeText:{
    fontSize:14,
    fontWeight:'bold'
},
addToCart:{
    flex:1,
    marginTop:3,
    alignItems:'center',
    justifyContent:'center'


},
addButton: {
        backgroundColor: '#F7255A',  
        borderRadius: 18,          
        paddingVertical: 8,
       width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,                
        shadowColor: '#6200ea',      
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    addButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});