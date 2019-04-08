import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import MenuButton from '../components/MenuButton'
import {connect} from 'react-redux'
import {Ionicons} from '@expo/vector-icons'

class SettingsScreen extends React.Component {

    render() {          
        return (
            <View style={styles.container}>
                <View style={styles.menuTop}>
                    <MenuButton style = {styles.menuButton} navigation = {this.props.navigation} /> 
                    <Text style={styles.menuText}>settings</Text>
                </View> 
                <View style = {styles.body}>
                    <View style = {styles.veganBox}>          
                <TouchableOpacity
                    style = {styles.button}
                    onPress={() => {
                        this.props.onSetMeat(),
                        this.props.navigation.navigate('Home')
                        }
                    }>
                    <Text style = {styles.buttonTextMeat}>meat me up, Scotty!</Text>   
                    {/* () =>this.props.navigation.navigate('Home') */}                         
                </TouchableOpacity>
                        {this.props.mealPreference === 'isMeat'? 
                            <Ionicons
                                name = "md-checkmark"
                                color = 'red'
                                size = {32}
                                style={styles.checkmark}
                            />: null
                        } 
                    </View>
                    <View style = {styles.vegetarianBox}>
                        <TouchableOpacity
                            style = {styles.button}
                            onPress={() => {
                                this.props.onSetVegetarian(),
                                this.props.navigation.navigate('Home')
                                }
                            }>
                            <Text style = {styles.buttonTextVegetarian}>vegetarian, please!</Text>                            
                        </TouchableOpacity>
                        {this.props.mealPreference === 'isVegetarian'? 
                            <Ionicons
                                name = "md-checkmark"
                                color = 'lightgreen'
                                size = {32}
                                style={styles.checkmark}
                            />: null
                        } 
                    </View>
                    <View style = {styles.meatBox}>
                        <TouchableOpacity
                            style = {styles.button}
                            onPress={() => {
                                this.props.onSetVegan(),
                                this.props.navigation.navigate('Home')
                                }
                            }>
                            <Text style = {styles.buttonTextVegan}>vegan, Baby!</Text>                                                       
                        </TouchableOpacity>
                        {this.props.mealPreference === 'isVegan'? 
                            <Ionicons
                                name = "md-checkmark"
                                color = 'green'
                                size = {32}
                                style={styles.checkmark}
                            />: null
                        } 
                    </View> 
                </View>        
                
            </View>           
        );
    }
}

// connects props to the SaladMixerApp component
function mapStateToProps(state) {
// this takes the state from the store and maps it to the mealPreference
    return {
        mealPreference: state.mealPreference
    }
}
//  which actions can be dispatched to the reducer?
function mapDispatchToProps(dispatch){
    return {
        onSetMeat: () => {
            console.log('onSetMeat')
            const action = {type: 'SET_MEAT'}
            dispatch(action)
        },
        onSetVegan: () => {
            console.log('onSetVegan')
            const action = {type: 'SET_VEGAN'}
            dispatch(action)           
        },
        onSetVegetarian: () => {
            console.log('onSetVegetarian')
            const action = {type: 'SET_VEGETARIAN'}
            dispatch(action)           
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);


//  styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
    menuText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
    },
    menuButton: {
        flex: 1,
    },
    button:  {
        borderWidth: 1, 
        borderColor: '#f2f2e1', 
        backgroundColor: '#eaeaea',
        height: 50,
        flex: 8, 
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextVegan: {
        color:'#067c44',
        fontWeight: 'bold'
    },
    buttonTextVegetarian: {
        color:'#44ba82',
        fontWeight: 'bold'
    },
    buttonTextMeat: {
        color:'#b70c13',
        fontWeight: 'bold'
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 7,
        marginHorizontal: 20,
    },
    veganBox: {
        flexDirection: 'row',
    },
    vegetarianBox: {
        flexDirection: 'row',
    },
    meatBox: {
        flexDirection: 'row',
    },
    checkmark:{
        flex: 1,
        color: 'green',
        padding: 8,
    },
});