import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAw0psDEq8KqMRVO3ZIBl9nC3BHpItPcfE",
  authDomain: "crystal-todo.firebaseapp.com",
  databaseURL: "https://crystal-todo.firebaseio.com",
  projectId: "crystal-todo",
  storageBucket: "crystal-todo.appspot.com",
  messagingSenderId: "310113746851"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Crystal',
    age: 20
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Buy milk'
});

todosRef.push({
  text: 'Work out'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNotesRef = notesRef.push({
//   text: 'walk the dog!'
// });
// console.log('Todo id', newNotesRef.key)



// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Goe entire databse', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e)
// });

// var logData =  (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
// firebaseRef.off();
// firebaseRef.update({isRunning: false});

// // Multipath update
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });
//
// // Child update
// firebaseRef.child('app').update({
//   name: 'Todo Application2'
// });
