import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

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

export default Historia;