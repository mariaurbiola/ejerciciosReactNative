import React, { Component } from 'react';
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import Contacto from './ContactoComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CalendarioNavegador() {
  return (
    <Stack.Navigator    //aqui se configura la barra de arriba
      initialRouteName="Calendario"
      screenOptions={{
        headerMode: 'float',
        headerTintColor: '#fff',    //color de la flecha de back - blanco
        headerStyle: { backgroundColor: '#015afc' },    //color del fondo de la barra - azul
        headerTitleStyle: { color: '#fff' },    //color del titulo - blasnco
      }}
    >
      <Stack.Screen //cada una de las pestañas
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle Excursión',
        }}
      />
    </Stack.Navigator>
  );
}

function ContactoNavegador() {
    return (
        <Stack.Navigator
            initialRouteName="Contacto"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#015afc' },
                headerTitleStyle: { color: '#fff' },
            }}
        >
            <Stack.Screen
                name="Contacto"
                component={Contacto}
                options={{
                    title: 'Contacto',
                }}
            />
        </Stack.Navigator>
    );
}

function HomeNavegador() {
  return (
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
              headerMode: 'screen',
              headerTintColor: '#fff',
              headerStyle: { backgroundColor: '#015afc' },
              headerTitleStyle: { color: '#fff' },
          }}
      >
          <Stack.Screen
              name="Home"
              component={Home}
              options={{
                  title: 'Campo Base',
              }}
          />
      </Stack.Navigator>
  );
}
  
function DrawerNavegador() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#c2d3da',
                },
            }}
        >
            <Drawer.Screen name="Home" component={HomeNavegador} />
            <Drawer.Screen name="Calendario" component={CalendarioNavegador} />
            <Drawer.Screen name="Contacto" component={ContactoNavegador} />
        </Drawer.Navigator>

    );
}
  

class Campobase extends Component {

  render() {

    return (
        <NavigationContainer>
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <DrawerNavegador />
            </View>      
        </NavigationContainer>
 
    );
}
}

export default Campobase;