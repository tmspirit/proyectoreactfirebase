import firebase from 'firebase';

//informacion de la aplicacion copiada desde firebase
const config = {
    apiKey: "AIzaSyBYNFK5suF7kwQi_XHmkgUCEqubNlhlR-8",
    authDomain: "proyectofirebase-8c47a.firebaseapp.com",
    databaseURL: "https://proyectofirebase-8c47a.firebaseio.com",
    projectId: "proyectofirebase-8c47a",
    storageBucket: "proyectofirebase-8c47a.appspot.com",
    messagingSenderId: "1051724608606",
    appId: "1:1051724608606:web:bd657e8470043d567770cf",
    measurementId: "G-Z2XH7TMFW5"
  };
  const fire= firebase.initializeApp(config);
  export default fire