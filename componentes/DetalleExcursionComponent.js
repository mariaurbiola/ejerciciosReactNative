import React, { Component, useState } from 'react';
import { Card, Icon } from 'react-native-elements';
import { Text, View, ScrollView, FlatList, Modal, Alert, StyleSheet, Pressable } from 'react-native';
import { colorGaztaroaClaro, colorGaztaroaOscuro, baseUrl } from '../comun/comun';
import { connect } from 'react-redux';
import { postComentario, postFavorito } from '../redux/ActionCreators';
import ModalComentarios from './ModalComentsComponent';


import * as Sharing from 'expo-sharing';
//expo install expo-sharing


const mapStateToProps = state => {

  return {
    actividades: state.actividades,
    excursiones: state.excursiones,
    cabeceras: state.cabeceras,
    comentarios: state.comentarios,
    favoritos: state.favoritos
  }
}
const mapDispatchToProps = dispatch => ({
  postFavorito: (excursionId) => dispatch(postFavorito(excursionId)),
  postComentario: (excursionId, valoracion, autor, comentario) => dispatch(postComentario(excursionId, valoracion, autor, comentario))

})




function RenderComentario(props) {

  const comentarios = props.comentarios;
  const renderCommentarioItem = ({ item, index }) => {

    return (
      <View key={index} style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.comentario}</Text>
        <Text style={{ fontSize: 12 }}>{item.valoracion} Stars</Text>
        <Text style={{ fontSize: 12 }}>{'-- ' + item.autor + ', ' + item.dia} </Text>
      </View>
    );
  };

  return (
    <Card>
      <Card.Title>Comentarios</Card.Title>
      <Card.Divider />
      <FlatList
        data={comentarios}
        renderItem={renderCommentarioItem}
        keyExtractor={item => item.id.toString()}
      />
    </Card>
  );
}


function RenderExcursion(props) {


  const excursion = props.excursion;
  const favoritos = props.favoritos;
  let isFavorito = false;
  for (let i = 0; i < favoritos.length; i++) {
    if (favoritos[i] === excursion.id) {
      isFavorito = true;
    }
  }

  if (excursion != null) {
    
    const excursionUrl = baseUrl + excursion.id;
    //const excursionUrl = "file://";
    console.log('url sharing: '+excursionUrl);
    console.log(Sharing.isAvailableAsync());
    //.filter((comentario) => comentario.excursionId === excursionId
    return (
      <Card>
        <Card.Title>{excursion.nombre}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: baseUrl + excursion.imagen }}></Card.Image>
        <Text style={{ margin: 20 }}>
          {excursion.descripcion}
        </Text>
        <Icon
          raised
          reverse
          name={isFavorito ? 'heart' : 'heart-o'}
          type='font-awesome'
          color='#f50'
          onPress={() => isFavorito ? console.log('La excursi??n ya se encuentra entre las favoritas.') : props.onPress()}
        />
        <Icon
          raised
          reverse
          name='pencil'
          type='font-awesome'
          color='#015afc'
          onPress={() => ModalComentarios()}
        />
        <Icon
          raised
          reverse
          name='share'
          type='font-awesome'
          color='#015afc'
          onPress={() => 
            Sharing.shareAsync(excursionUrl)}
        />
      </Card>


    );
  }
  else {
    return (<View></View>);
  }
}




//Virtualized LIst para sustituir a ScrollView
const VirtualizedList = ({ children }) => {
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

class DetalleExcursion extends Component {

  constructor(props) {
    super(props);
    this.state = {
        valoracion: 3,
        autor: '',
        comentario: '',
        showModal: false
    }
  } 

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }


  resetForm() {
    this.setState({
        valoracion: 34,
        autor: 'reset',
        comentario: 'reset',
        dia: 'reset',
        showModal: false
    });
  } 
  

  marcarFavorito(excursionId) {
    
    this.props.postFavorito(excursionId);
    this.gestionarComentario(excursionId);  
    this.resetForm();
    //esto no va aqui, sino que cuando se envie un nuevo comentario se debera llamar a esta funcion
  }

  //function GestionarComentario(excursionId, valoracion, autor, comentario) {
  gestionarComentario(excursionId) {
  //se llamara a esta funcion cuando se de a enviar al modal
  /*
  const excursionId = props.excursionId;  //viene del modal
  //valoracion  //viene del modal
  //autor //viene del modal
  //comentario  //viene del modal

  this.props.postComentario(excursionId, valoracion, autor, comentario);
*/
    console.log('de comentarios, valoracion: '+this.state.valoracion);
    console.log('de comentarios, comentario: '+this.state.comentario);
    console.log('de comentarios, autor: '+this.state.autor);

    this.props.postComentario(excursionId, this.state.valoracion, this.state.autor, this.state.comentario);
  }

  render() {
    const { excursionId } = this.props.route.params;

    return (
      <VirtualizedList>
        <RenderExcursion
          excursion={this.props.excursiones.excursiones[+excursionId]}
          favoritos={this.props.favoritos.favoritos}
          onPress={() => this.marcarFavorito(excursionId)}
        />

        <RenderComentario
          comentarios={this.props.comentarios.comentarios.filter((comentario) => comentario.excursionId === excursionId)}
        />
      </VirtualizedList>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DetalleExcursion);