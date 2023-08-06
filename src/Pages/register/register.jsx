import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebaseApp from '../../lib/authentication';
import Form from '../../Components/form/form';
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickSignIn = async (e) => {
    e.preventDefault();

  
    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('* These fields are required'); 
      return;
    }
  
    try {
      const  user = await firebaseApp().signIn(email, password);
      if (user) {
        console.log('hello', user);
        navigate('/wall');
      } else {
        // No es necesario hacer nada aquí si la autenticación falla
        // ya que el mensaje de error ya se establece en la función
      }

    } catch (error) {
      // Si la autenticación falla, establece el mensaje de error en el estado errorMessage
      setErrorMessage('Invalid email or password');
      console.log('Error:', error.message);
    }
  };
  
  const handleClickLogin = () => {
    navigate('/')
}

  return (
    <div className="login">
      <main>
        <section className="login__body">
          <h1 className='login__register'>Register</h1>
          <Form 
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          errorMessage={errorMessage}
          linkText="Login" 
          onClickinLink={handleClickLogin} // Corregido aquí 
          buttonText="Sign up" 
          onLoginButtonClick={handleClickSignIn} 
          // onGoogleButtonClick={handleClickGoogle}
          />
          
        </section>
      </main>
    </div>
  );
};


export default Register;