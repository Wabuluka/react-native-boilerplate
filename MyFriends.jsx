import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native"
import { FAB, List, Portal, Text, Title } from "react-native-paper";
import ContextualActionBar from "./components/ContextualActionBar";

const MyFriends= (props) =>
{
    const isScreenFocused = useIsFocused();
    const [ fabIsOpen, setFabIsOpen ] = useState(false);
    const [ cabIsOpen, setCabIsOpen ] = useState(false);
    const navigation = useNavigation();

    const [ selectedItemName, setSelectedItemName ] = useState('');

    useEffect(() => {
      if (cabIsOpen) {
        navigation.setOptions({
          header: (props) => (
            <ContextualActionBar 
              {...props}
              title={selectedItemName} 
              close={closeHeader}
            
            />
          ),
        });
      } else {
        navigation.setOptions({header: undefined});
      }
    }, [cabIsOpen, selectedItemName]);

    const openHeader = useCallback((str)=> {
      setSelectedItemName(str);
      setCabIsOpen(!cabIsOpen);
    }, [cabIsOpen]);

    const closeHeader = useCallback(()=> {
      setCabIsOpen(false);
      setSelectedItemName('');
    }, []);

    return(
        <ScrollView>
          <View style={styles.container}>
            <Portal>
                <FAB.Group
                    visible={isScreenFocused}
                    open={fabIsOpen}
                    onStateChange={({open}) => setFabIsOpen(open)}
                    icon={fabIsOpen ? 'close' : 'plus'}
                    actions={[
                      {
                        icon: 'plus',
                        label: 'Add new friend',
                        onPress: () => {},
                      },
                      
                    ]}
                />
            </Portal>

            <List.Item
                title='Friend #1'
                description='Mar 18 | 3:31 PM'
                style={styles.listItem}
                onPress={() => {}}
                onLongPress={()=>openHeader('Friend #1')}
            />
            <List.Item
                title='Friend #2'
                description='Mar 18 | 3:31 PM'
                style={styles.listItem}
                onPress={() => {}}
                onLongPress={()=>openHeader('Friend #2')}
            />
            
        </View>
      </ScrollView>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5
  },
  listItem: {
    width: '100%',
    backgroundColor: '#4C3D3D',
    marginBottom: 8,
    borderRadius: 5
  }
})




export default MyFriends;