import React, { Component } from 'react';
import { ListItem, Avatar, Card } from 'react-native-elements';
import { ScrollView, FlatList } from 'react-native';

import Historia from './HistoriaComponent';

import { ACTIVIDADES } from '../comun/actividades';
import { colorGaztaroaClaro, colorGaztaroaOscuro, baseUrl} from '../comun/comun';

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

function RenderActividad(props) {

    const actividades = props.actividades;
            
    const renderActividadItem = ({item, index}) => {
        
        return (
            <ListItem
                key={index}
                bottomDivider>
                <Avatar source={{uri: baseUrl + item.imagen}} />
                <ListItem.Content>
                    <ListItem.Title>{item.nombre}</ListItem.Title>
                    <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem> 
        );
    };
    
    return (
        <Card>
            <Card.Title >Actividades y Recursos</Card.Title>
            <Card.Divider/>
            <FlatList 
                data={actividades}
                renderItem={renderActividadItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


class QuienesSomos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actividades: ACTIVIDADES
        };
    };

    render(){
        return(
            <ScrollView>
                <Historia />
    
                <RenderActividad
                    actividades={this.state.actividades}
                />
            </ScrollView>
        );
      } 

    //const { navigate } = this.props.navigation;    

    
}

export default QuienesSomos;