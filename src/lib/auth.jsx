import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from './firebaseConfig';


const firebase = () =>{

    const auth = getAuth(app);
    const provide = new GoogleAuthProvider();

    // Autenticación con correo y contraseña
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(error.message)
        });
    }


    // Autenticación con Google
    const singGoogle = ()=>{
        return signInWithPopup(auth, provide)
        .then((result) => {
            return result;
        })
        .catch((error)=>{
            console.log(error)
        })
    }


   return {
    signIn,
    singGoogle
   }
}

export default firebase;