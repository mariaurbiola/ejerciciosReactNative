import React, { Component } from 'react';
import { ListItem, Avatar, Card } from 'react-native-elements';
import { SafeAreaView, FlatList, Text} from 'react-native';
import { ACTIVIDADES } from '../comun/actividades';

class ActividadesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actividades: ACTIVIDADES
        };
    }

    render(){

    //const { navigate } = this.props.navigation;    

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

    return (
    

            <Card>
                    <Card.Title >Actividades y Recursos</Card.Title>
                    <Card.Divider/>

                    
                <FlatList 
                    data={this.state.actividades}
                    renderItem={renderActividadesItem}
                    keyExtractor={item => item.id.toString()}
                />
               
                
            </Card>
     
    );
    }
}

export default ActividadesItem;