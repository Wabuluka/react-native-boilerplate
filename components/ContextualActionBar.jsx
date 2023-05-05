import { StyleSheet } from "react-native";

const { Appbar } = require("react-native-paper")

const ContextualActionBar = (props)=>{
    return(
        <Appbar.Header {...props} style={{width: '100%'}}>
            <Appbar.Action icon='close' onPress={() => {props.close()}} />
            <Appbar.Content title={props.title} />
            <Appbar.Action icon='delete' onPress={() => {}} />
        </Appbar.Header>
    )
} 

export default ContextualActionBar;