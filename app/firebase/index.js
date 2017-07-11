import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAw0psDEq8KqMRVO3ZIBl9nC3BHpItPcfE",
    authDomain: "crystal-todo.firebaseapp.com",
    databaseURL: "https://crystal-todo.firebaseio.com",
    projectId: "crystal-todo",
    storageBucket: "crystal-todo.appspot.com",
    messagingSenderId: "310113746851"
  };
  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
