// import { onAuthStateChanged } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseConfig';

const firebaseApp = () => {
    const auth = getAuth(app);

    // Autenticación con correo electrónico y contraseña
    const signIn = async(email, password) => {
        try{
            const userCredential
             = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Successfully signed in with email and password', user);
            return  user; // Devolver un objeto con el usuario autenticado
        }catch(error)  {
            const errorMessage = error.message;
            console.log('Error signing in with email and password:', errorMessage);
            throw error; 
        }
    };

    return { 
        signIn 
    };
};

export default firebaseApp;










