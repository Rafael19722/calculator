import React from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        heigh: Dimensions.get('window').width / 4 - 2,
        width: Dimensions.get('window').width / 4 - 2,
        padding: 30,
        backgroundColor: '#f0f0f0',
        textAling: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4 - 2) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4 - 2) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}