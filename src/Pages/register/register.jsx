
import RegisterForm from '../../Components/form/registerForm';
import './register.css';

const Register = () => {
 
  return (
    <div className="register">
      <main>
        <section className="register__body">
          <h1 className='register__title'>Register</h1>
          <RegisterForm />
          
        </section>
      </main>
    </div>
  );
};


export default Register;