import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
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
    );
}


const styles = StyleSheet.create({
    mainComponent: {
        flex: 1,
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