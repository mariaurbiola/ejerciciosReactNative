import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Campobase from './componentes/CampobaseComponent';
import {Provider} from 'react-redux'
//import { createStore } from 'redux';
/*import  actividades  from './redux/actividades';
import comentarios from './redux/comentarios';
import cabeceras from './redux/cabeceras';
import excursiones from './redux/excursiones';*/

 
//const store = createStore({ reducer: actividades })
//<Provider store={store}></Provider>

import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Campobase/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});