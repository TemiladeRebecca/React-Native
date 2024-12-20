import { Pressable, View, Text } from "react-native"

export default function TextInputData(props) {

    const deleteItem = () => {
        props.onDeleteItem(props.id);
    }
    
    return (
        <View style={{paddingVertical: 10, paddingHorizontal: 16}}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={deleteItem}>
                <Text style={{color: '#303640', fontSize: 20}}>{props.text}</Text>
            </Pressable>
        </View>     
    );
}