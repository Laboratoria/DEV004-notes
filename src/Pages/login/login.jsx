import LoginForm from '../../Components/form/loginForm';
import './login.css';

const Login = () => {
 
  return (
    <div className="login">
      <main>
        <section className="login__body">
          <h1 className='login__title'>Lab Notes</h1>
          <LoginForm /> 
        </section>
      </main>
    </div>
  );
};


export default Login;


