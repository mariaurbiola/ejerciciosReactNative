import React, { Component } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { SafeAreaView, FlatList, View } from 'react-native';
import { colorGaztaroaClaro, colorGaztaroaOscuro, baseUrl } from '../comun/comun';
import {IndicadorActividad} from './IndicadorActividadComponent';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        excursiones: state.excursiones
    }
}


class Calendario extends Component {

    render() {

        const { navigate } = this.props.navigation;

        const renderCalendarioItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    onPress={() => navigate('DetalleExcursion', { excursionId: item.id })}
                    bottomDivider>
                    <Avatar source={{ uri: baseUrl + item.imagen }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            );
        };

        if (this.props.excursiones.isLoading == false) {
            return (
                <SafeAreaView>
                    <FlatList
                        data={this.props.excursiones.excursiones}
                        renderItem={renderCalendarioItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </SafeAreaView>
            );
        } else if (this.props.excursiones.errMess) {
            return (
                <View>
                    <Text>{this.props.excursiones.errMess}</Text>
                </View>
            )
        } else {
            return (
                <View></View>
            );
        }
    }
}

export default connect(mapStateToProps)(Calendario);