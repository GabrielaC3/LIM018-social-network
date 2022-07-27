import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged, 
    auth, } from './firebaseConfig.js';
    
// FUNCIÓN REGISTER
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('Hay un usuario');
      console.log(uid);
  //getName(uid);
     } else {
      // User is signed out
      // ...
      console.log('No hay un usuario');
    }
  });

// FUNCIÓN LOGIN
export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

  export const loginGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log('registrado con google');
        window.location.href = '#/home';
      })
  
      .catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert(errorMessage);
      });
  }
  
  // FUNCIÓN LOGOUT
  export const signOutUser = () => signOut(auth)
  