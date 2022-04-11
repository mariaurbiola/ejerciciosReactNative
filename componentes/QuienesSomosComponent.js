import React, { Component } from 'react';
import { Card} from 'react-native-elements';
import { Text, SafeAreaView } from 'react-native';

import Historia from './HistoriaComponent';
import ActividadesItem from './ActividadesComponent'

/*function Actividades () {
    constructor(props) {
        super(props);
        this.state = {
            actividades: ACTIVIDADES
    };

    const renderActividadesItem = ({item, index}) => {
        
        return (
            <ListItem
                key={index}
                //onPress={() => navigate('DetalleExcursion', { excursionId: item.id })}
                bottomDivider>
                <Avatar source={require('./imagenes/40Años.png')} />
                <ListItem.Content>
                    <ListItem.Title>{item.nombre}</ListItem.Title>
                    <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem> 
        );
    };

    

}*/

class QuienesSomos extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            actividades: ACTIVIDADES
        };
    };*/

    render() {

        return (
            
            <SafeAreaView>
                <Historia />
                
                <ActividadesItem />
            </SafeAreaView>       
            
        );
    }

    //const { navigate } = this.props.navigation;    

    
}

export default QuienesSomos;