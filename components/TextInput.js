import {View, TextInput, Button, Modal, Image, StyleSheet} from 'react-native';
import { useState } from 'react';

export default function TextInputGoal(props) {
    const [inputGoal, setInputGoal] = useState('');

    
    const inputGoalHandler = (text) => {
        setInputGoal(text);
    };

    const goalHandler = () => {
        props.courseGoalHandler(inputGoal);
        setInputGoal('');
    }
    return (
            <Modal visible={props.isModalVisible} animationType='slide'>
                <View style={styles.inputComponent}>
                    <Image source={require('../assets/images/goal.png')} style={styles.image} />
                    <TextInput style={styles.textInputComponent}
                    placeholder="Enter your goal"
                    value={inputGoal}
                    onChangeText={inputGoalHandler}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Add Goal" color='#5e0acc' onPress={goalHandler}></Button>
                        </View>
                        <View style={styles.button}>
                            <Button title='Cancel' color='#f31282' onPress={props.onCancel}/>
                        </View>
                    </View>
                </View>
            </Modal>
            
    );
}

const styles = StyleSheet.create({
    inputComponent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
        padding: 16,
    },
    textInputComponent: {
        width: '100%',
        paddingLeft: 10,
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#596270'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})