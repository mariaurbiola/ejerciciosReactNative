import React, { Component } from 'react';
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import Contacto from './ContactoComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import QuienesSomos from './QuienesSomosComponent';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeComponent';
import { createDrawerNavigator,   DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorGaztaroaClaro, colorGaztaroaOscuro, baseUrl} from '../comun/comun';




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CalendarioNavegador({ navigation }) {
  return (
    <Stack.Navigator
    //aqui se configura la barra de arriba
      initialRouteName="Calendario"
      screenOptions={{
        headerMode: 'float',
        headerTintColor: '#fff',    //color de la flecha de back - blanco
        headerStyle: { backgroundColor: colorGaztaroaOscuro },    //color del fondo de la barra - azul
        headerTitleStyle: { color: '#fff' },    //color del titulo - blasnco
       
      }}
    >
      <Stack.Screen //cada una de las pestañas
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
          headerLeft: () => (
            <Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
            />
          ),
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

function ContactoNavegador({ navigation }) {
  return (
    <Stack.Navigator

            initialRouteName="Contacto"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: colorGaztaroaOscuro },
                headerTitleStyle: { color: '#fff' },
                headerLeft: () => (
                  <Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
                  />
                ),
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


function QuienesSomosNavegador({ navigation }) {
  return (
    <Stack.Navigator
          initialRouteName="Quienes somos"
          screenOptions={{
              headerMode: 'screen',
              headerTintColor: '#fff',
              headerStyle: { backgroundColor: colorGaztaroaOscuro },
              headerTitleStyle: { color: '#fff' },
              headerLeft: () => (
                <Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
                />
              ),
            }}
      >
          <Stack.Screen
              name="Quienes Somos"
              component={QuienesSomos}
              options={{
                  title: 'Quienes Somos',
              }}
          />
      </Stack.Navigator>
  );
}


function HomeNavegador({ navigation }) {
  return (
    <Stack.Navigator

          initialRouteName="Home"
          screenOptions={{
              headerMode: 'screen',
              headerTintColor: '#fff',
              headerStyle: { backgroundColor: colorGaztaroaOscuro },
              headerTitleStyle: { color: '#fff' },
              headerLeft: () => (
                <Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
                />
              ),
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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={{uri: baseUrl +'logo.png'}} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}> Gaztaroa</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

  
function DrawerNavegador() {
  return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: colorGaztaroaClaro,
          },
        }}
      >
        <Drawer.Screen name="Campo base" component={HomeNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
              />
            )
            }}
        />
        <Drawer.Screen name="Quienes Somos" component={QuienesSomosNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='info-circle' 
              type='font-awesome'            
              size={24}
              color={tintColor}
              />
            )
            }}
        />
        <Drawer.Screen name="Calendario" component={CalendarioNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='calendar'
              type='font-awesome'            
              size={24}
              color={tintColor}
              />
            )
            }}
        />
        <Drawer.Screen name="Contacto" component={ContactoNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='address-card'
              type='font-awesome'            
              size={24}
              color={tintColor}
              />
            )
            }}
        />
        
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: colorGaztaroaOscuro,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Campobase;
