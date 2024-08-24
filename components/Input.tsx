import { defaultShortcuts, ShortcutProps } from "@/styles/shortcuts";
import { TextInputProps, TextInput } from "react-native";
// import { TextInput } from "react-native-gesture-handler";

interface InputProps extends TextInputProps, ShortcutProps{

}

export function Input(props: InputProps){
    return (
        <TextInput style={[defaultShortcuts(props), {
            fontSize:16, borderRadius:16, backgroundColor: "lightblue", color:"black", padding:10
        }]} {...props}/>
    );
}