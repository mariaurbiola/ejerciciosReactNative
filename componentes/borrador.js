/*import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { Button } from 'react-native';
import { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import { colorGaztaroaClaro, colorGaztaroaOscuro, baseUrl} from '../comun/comun';

//import * as Google from "expo-google-app-auth";

//Lo siguiente es para REDUX, aqui no haría falta pero lo pongo por si acaso para luego
import { connect } from 'react-redux';
const mapStateToProps = state => {

    return {
      
    }
}


// Initialize Firebase
initializeApp({
  //Config 
});

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '1044049393338-5j8f2fi3ga9og6pr0ug75jrv1e21bbc3.apps.googleusercontent.com',
      },
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const credential = provider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}





/*function RenderAutenticacion(props) {
    return(
    <Card>
        <Card.Title>Autenticacion</Card.Title>
        <Card.Divider/>
        
        <Text style={{margin: 20}}>
            Kaixo Mendizale!
        </Text>
        <Text style={{margin: 20}}>
            Si quieres participar en las salidas de montaña que organizamos o quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a través de diferentes medios. Puedes llamarnos por teléfono los jueves de las semanas que hay salida (de 20:00 a 21:00). También puedes ponerte en contacto con nosotros escribiendo un correo electrónico, o utilizando la aplicación de esta página web. Y además puedes seguirnos en Facebook.
        </Text> 
        <Text style={{margin: 20}}>
            Para lo que quieras, estamos a tu disposición!
        </Text>
        <Text style={{margin: 20}}>
            Tel: +34 948 277151
        </Text>
        <Text style={{margin: 20}}>
            Email: gaztaroa@gaztaroa.com
        </Text>
    </Card>
    );
        
}*/
/*
class Autenticacion extends Component {
    constructor(props) {
        super(props);
        
    }


  render(){
      return(<RenderAutenticacion />);
  } 
}/*

/*const Autenticacion = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId: `<YOUR_ANDROID_CLIENT_ID>`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login with Google" onPress={signInAsync} />
    </View>
  );
}*/

//export default LoginScreen;




/*
export default connect(mapStateToProps)(Autenticacion);
const styles = StyleSheet.create({});
*/