import { View, StyleSheet, FlatList, Text, Pressable, ImageBackground } from "react-native";
import { useState } from "react";
import TextInputGoal from "./components/TextInput";
import TextInputData from "./components/TextInputData";

export default function App () {
    
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false)
 
    const courseGoalHandler = (inputGoal) => {
        setCourseGoals((currentCourseGoals) => [...currentCourseGoals,{text:inputGoal, id: Math.random().toString()}]);
        closeModalHandler();
    }

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id)
        })
    }

    const openModalHandler = () => {
        setModalIsVisible(true)
    }

    const closeModalHandler = () => {
        setModalIsVisible(false)
    }
    return (
        <ImageBackground 
            source={require('./assets/images/arrows.jpg')}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundStyle}>
            <View style={styles.mainComponent}>
            <Pressable style={styles.button} onPress={openModalHandler}>
                <Text style={styles.text}>Add New Goal</Text>
            </Pressable>
            <TextInputGoal 
                courseGoalHandler={courseGoalHandler} 
                isModalVisible={modalIsVisible}
                onCancel={closeModalHandler} />
            <FlatList 
                data={courseGoals}
                renderItem={({item}) => {
                return (
                    <TextInputData 
                        text={item.text}
                        onDeleteItem={deleteGoalHandler} 
                        id={item.id} />
                )}}
            keyExtractor={(item) => item.id}/>            
        </View>
    </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundStyle: {
        opacity: 0.3
    },
    mainComponent: {
        paddingTop: 50,
    },
    button: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        color: '#4B0082',
        fontSize: 24,
        fontWeight: 'bold',
      },

})