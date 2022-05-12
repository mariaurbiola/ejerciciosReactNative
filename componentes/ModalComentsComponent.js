import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Modal } from "react-native";
import { Card, Icon } from 'react-native-elements';

function ModalComentarios() {
    console.log('Nuevo comentario');
    const isModalVisible = true;

    const toggleModal = () => {
        isModalVisible = (!isModalVisible);
    };
    console.log(isModalVisible);
    return (
        <View>
            <Modal visible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>
                    {/* <Button title="Hide modal" onPress={toggleModal} /> */}
                </View>
            </Modal>
        </View>
    );
}

export default ModalComentarios;