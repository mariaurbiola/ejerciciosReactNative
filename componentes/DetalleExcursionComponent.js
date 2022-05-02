import React, { Component, useState } from 'react';
import { Card, Icon } from 'react-native-elements';
import { Text, View, ScrollView, FlatList, Modal, Alert, StyleSheet, Pressable } from 'react-native';
import { colorGaztaroaClaro, colorGaztaroaOscuro, baseUrl } from '../comun/comun';
import { connect } from 'react-redux';
import { postFavorito } from '../redux/ActionCreators';
import ModalComentarios from './ModalComentsComponent';

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
  postFavorito: (excursionId) => dispatch(postFavorito(excursionId))
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
          onPress={() => isFavorito ? console.log('La excursión ya se encuentra entre las favoritas.') : props.onPress()}
        />
        <Icon
          raised
          reverse
          name='pencil'
          type='font-awesome'
          color='#015afc'
          onPress={() => ModalComentarios()}
        />
      </Card>


    );
  }
  else {
    return (<View></View>);
  }
}

function añadirComentario() {
  console.log('Nuevo comentario');
  const modalVisible = true;
  return (
    <View>
      <Modal
        animationType="slide"
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          modalVisible = false;
        }}
      >
        <View>
          <Text>Hello Word!</Text>
        </View>
        {/* <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View> */}
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
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

  marcarFavorito(excursionId) {
    this.props.postFavorito(excursionId);
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