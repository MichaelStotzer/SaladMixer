import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import MenuButton from '../components/MenuButton'
import MixButton from '../components/MixButton'
import {connect} from 'react-redux'
import {baseArray, proteinArray, vitaminArray, sauceArray} from '../components/ingredientArrays'

class HomeScreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        base: getRandomIngredient(baseArray),
        protein: getRandomIngredient(proteinArray),
        vitamin: getRandomIngredient(vitaminArray),
        sauce: getRandomIngredient(sauceArray),
        sauceFlag: 'name',
        freshLoad: true,
      }
    }  

//  what happens when the button 'pimp my salad!' is pressed
    handlePress = () => {
//  reset the freshLoad flag
      this.setState({
        freshLoad : true
      })
//  reset the sauce tile back to the ingredient name
      this.setState({
        sauceFlag: 'name'
      })
      this.setBase(),
      this.setProtein(),
      this.setVitamin(),
      this.setSauce()   
    }

//  get new ingredients
    setBase = () => {
      this.setState({
        base: getRandomIngredient(baseArray),
      }) 
    }

    setProtein = () => {
      this.setState({
//  get a new protein and check if it matches the correct mealPreference
        protein: getRandomIngredient(proteinArray),
      }, () => this.matchProtein())
    }

    setVitamin = () => {
      this.setState({
        vitamin: getRandomIngredient(vitaminArray),
      })
    }

    setSauce = () => {
      this.setState({
//  get a new sauce and check if it matches the correct mealPreference
        sauce: getRandomIngredient(sauceArray),
      }, () => this.matchSauce())
    }


//  match the protein & sauce to the correct mealPreference
    matchSauce = () => {
      switch(this.props.mealPreference){
        case 'isVegan':
          if(this.state.sauce.getIngredientFlag() === this.props.mealPreference)
            return this.state
          else
            this.setSauce()

        case 'isVegetarian':
          if(this.state.sauce.getIngredientFlag() === 'isVegan' || this.state.sauce.getIngredientFlag() === 'isVegetarian') 
            return this.state
          else 
            this.setSauce()
        case 'isMeat':
          return this.state
      }
    }

      matchProtein = () => {
        switch(this.props.mealPreference){
          case 'isVegan':
            if(this.state.protein.getIngredientFlag() === this.props.mealPreference)
              return this.state           
            else 
              this.setProtein()           
          case 'isVegetarian':
            if(this.state.protein.getIngredientFlag() === 'isVegan' || this.state.protein.getIngredientFlag() === 'isVegetarian')
              return this.state
            else 
              this.setProtein()
          case 'isMeat':
            return this.state
      }    
    }

//  decides whether to display the ingredientName or the ingredientRecipe
    toggleRecipe(){
      if(this.state.sauceFlag === 'name'){
        this.setState({sauceDisplay: this.state.sauce.getIngredientName()})
        this.setState({sauceFlag: 'recipe'})
        this.setState({freshLoad: false})      
      } else {       
        this.setState({sauceDisplay: this.state.sauce.getIngredientRecipe()})
        this.setState({sauceFlag: 'name'})
        this.setState({freshLoad: true})        
      }
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.top}>
                <View style={styles.menuTop}>
                  <MenuButton style = {styles.menuButton} navigation = {this.props.navigation} />
                  <Text style={styles.menuText}>salad mixer</Text>
                </View>
                <View style={styles.topBox}>
                  <ImageBackground source={this.state.base.getIngredientImage()}
                                  style={styles.topLeftBox} >
                    <View style={styles.inner}>
                      <Text style={styles.ingredientText}> 
                        {this.state.base.getIngredientName()}
                      </Text>
                    </View>
                  </ImageBackground> 
                  <ImageBackground source={this.state.protein.getIngredientImage()}
                                  style={styles.topRightBox} >
                    <View style={styles.inner}>
                      <Text style={styles.ingredientText}> 
                        {this.state.protein.getIngredientName()}
                      </Text>
                    </View>
                  </ImageBackground> 
                </View>
              </View>
              <MixButton title="PIMP MY SALAD!"
                      onPress = {(()=>this.handlePress())}
                      style = {styles.mixSaladButton}
              >
                PIMP MY SALAD!
              </MixButton>
              <View style={styles.bottom}>
                <ImageBackground source={this.state.vitamin.getIngredientImage()}
                                 style={styles.bottomLeftBox} >
                    <View style={styles.inner}>
                      <Text style={styles.ingredientText}> 
                        {this.state.vitamin.getIngredientName()}
                      </Text>
                    </View>
                  </ImageBackground> 
                  <ImageBackground source={this.state.sauce.getIngredientImage()}
                                 style={styles.bottomRightBox} >
                    <TouchableOpacity style={styles.inner}
                                      onPress={()=>this.toggleRecipe()}
                    >
                    {this.state.freshLoad === true ?
                      <Text style={styles.ingredientText}>{this.state.sauce.getIngredientName()}</Text>
                      :
                      <Text style={styles.ingredientText}>{this.state.sauce.getIngredientRecipe()}</Text>
                    }
                    </TouchableOpacity>
                  </ImageBackground> 
                <View style={styles.bottomRight}>
                
                </View>
              </View>
            </View>   
          )
        
    }
}
//  map the props to the store
function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
      mealPreference: state.mealPreference,
  }
}
//  connect the HomeScreen to the store
export default connect(mapStateToProps)(HomeScreen);

//  function to get a random ingredient from an array
function getRandomIngredient (arr){
  if (arr && arr.length) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

//  styles
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },
  menuTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mixSaladButton: {
    flex: 1,
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
  top: {
    flex: 4,
  },
  topBox: {
    flex: 3,
    flexDirection: 'row',
  },
  bottom: {
    flex: 3,
    flexDirection: 'row',
  },
  topLeftBox: {
    flex: 1,
  },
  topRightBox: {
    flex: 1,
  },
  bottomLeftBox: {
    flex: 1,
  },
  bottomRightBox: {
    flex: 1,
  },  
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10%',
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, .6)',
  },
  ingredientText: {
    fontSize: 16, 
    fontWeight: 'bold'
  },
});