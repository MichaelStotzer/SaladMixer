import React from "react"
import {connect} from 'react-redux'
import DrawerNavigator from './navigation/DrawerNavigator'

class SaladMixerApp extends React.Component {
    render() {
        console.log('render')
        return (
            <DrawerNavigator />
        );
    }
}
//  creates a new component where mapStateToProps and SaladMixerApp are hooked up
export default connect ()(SaladMixerApp);