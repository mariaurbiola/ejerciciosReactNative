import * as React from 'react';
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


//https://developers.google.com/identity/sign-in/web/sign-in


//import * as Google from "expo-google-app-auth";

//Lo siguiente es para REDUX, aqui no haría falta pero lo pongo por si acaso para luego
import { connect } from 'react-redux';
const mapStateToProps = state => {

    return {
      
    }
}


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU7yoAn1hmjyL9b9VPsldBk4k4BJI0-YI",
  authDomain: "reactnative-8e3df.firebaseapp.com",
  projectId: "reactnative-8e3df",
  storageBucket: "reactnative-8e3df.appspot.com",
  messagingSenderId: "1044049393338",
  appId: "1:1044049393338:web:bcb5c8c948b060a9263483"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


WebBrowser.maybeCompleteAuthSession();

function RenderAutenticacion() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '1044049393338-61aebrhckubhtmd2a5bvmdjl216v1lqh.apps.googleusercontent.com',
      },
  );


  React.useEffect(() => {
    if (response?.type === 'success') {
      console.log('hola');
      console.log(response.params);
      const { id_token } = response.params;
      
      const auth = getAuth();
      console.log('auth: '+JSON.stringify(auth));

      const credential = GoogleAuthProvider.credential(id_token);
        


  console.log('credential: '+credential);
  console.log('credential: '+JSON.stringify(credential));
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login con Google"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}


class Autenticacion extends Component {
    constructor(props) {
        super(props);
        
    }


  render(){
      return(<RenderAutenticacion />);
  } 
}

export default connect(mapStateToProps)(Autenticacion);
