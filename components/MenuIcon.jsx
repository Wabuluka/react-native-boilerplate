import React from 'react';
import {IconButton, Button} from 'react-native-paper';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function MenuIcon() {
  const navigation = useNavigation();

  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, []);

  return <IconButton icon='menu' size={20} onPress={openDrawer} />;
}