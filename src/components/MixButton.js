import React from 'react';
import { Text,
         StyleSheet, 
         TouchableOpacity 
} from 'react-native';

const MixButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.buttonBody}
        >
            <Text style={styles.buttonText}>
                { props.children }
            </Text>           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBody: {
        backgroundColor: '#00aeef',
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0  ,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    }
});

export default MixButton;