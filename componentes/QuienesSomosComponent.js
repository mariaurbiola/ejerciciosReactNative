import React, { Component } from 'react';
import { ListItem, Avatar, Card } from 'react-native-elements';
import { ScrollView, FlatList, View, SafeAreaView, Text } from 'react-native';
import { colorGaztaroaClaro, colorGaztaroaOscuro, baseUrl} from '../comun/comun';

//CambioREDUX
//import { ACTIVIDADES } from '../comun/actividades';
import { connect } from 'react-redux';



function RenderHistoria(props) {
    return(
    <Card>
        <Card.Title >Un poquito de historia</Card.Title>
        <Card.Divider/>       
        <Text style={{margin: 20}}>
        El nacimiento del club de montaña Gaztaroa se remonta a la primavera de 1976 cuando jóvenes aficionados a la montaña y pertenecientes a un club juvenil decidieron crear la sección montañera de dicho club. Fueron unos comienzos duros debido sobre todo a la situación política de entonces. Gracias al esfuerzo económico de sus socios y socias se logró alquilar una bajera. Gaztaroa ya tenía su sede social.
        
        Desde aquí queremos hacer llegar nuestro agradecimiento a todos los montañeros y montañeras que alguna vez habéis pasado por el club aportando vuestro granito de arena.
        
        Gracias!

        </Text>       
    </Card>
    );      
}
class Historia extends Component {
    constructor(props) {
        super(props);
        
    }
  render(){
      return(<RenderHistoria />);
  } 
}

function RenderActividad(props) {

    const actividades = props.actividades;
    
    //console.log('Actividades en QuinenesSomos: '+JSON.stringify(actividades));
            
    const renderActividadItem = ({item, index}) => {
        
        return (
            <ListItem
                key={index}
                bottomDivider
            >
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

//Virtualized LIst para sustituir a ScrollView
const VirtualizedList = ({children}) => {
    return (
        <FlatList
            data={[]}
            keyExtractor={() => "key"}
            renderItem={null}
            ListHeaderComponent={
                <>{children}</>
            }
        />
    )
}
const mapStateToProps = state => {

    return {
      actividades: state.actividades
    }
}

class QuienesSomos extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            actividades: ACTIVIDADES
        };
    };*/
    
    

    render(){
        return(
            <VirtualizedList>
                
                <Historia />
    
                <RenderActividad
                    actividades={this.props.actividades.actividades}
                   
                />
                
            </VirtualizedList>
        );
      } 
}

export default connect(mapStateToProps)(QuienesSomos);