import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native";

function ModalComentarios() {
    console.log('Nuevo comentario');
    const isModalVisible=true;

    const toggleModal = () => {
        isModalVisible=(!isModalVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            {/* <Button title="Show modal" onPress={toggleModal} /> */}

            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>

                    {/* <Button title="Hide modal" onPress={toggleModal} /> */}
                </View>
            </Modal>
        </View>
    );
    console.log('fin modal');
}

export default ModalComentarios;