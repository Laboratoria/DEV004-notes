/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import firebase from "../../lib/auth"
import ClickButton from '../buttonGoogle/btnGoogle';
// import './registerForm.css';


const RegisterForm = () => {
    const navigate = useNavigate()
    const [errorMessage,setErrorMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmitLogin = (data) =>{      
        firebase().signIn(data.email, data.password)
        .then(user => {
            console.log(user)
            if (user) {
                navigate('/wall')
            }else {
                console.log('correo y contraseña inconrrecta')
                setErrorMessage('correo y contraseña inconrrecta');
            }
        })        
    }
    
    const onClickinLink = () => {
        navigate('/')
    }


  return (
    <div className="column">

        <form className="form__content" action="#" onSubmit={handleSubmit(onSubmitLogin)}>

            <div className="form__group">
                {/* <label className='form__label' htmlFor="email">Email</label> */}
                <input  
                    {...register('email', {
                        required: 'Email required',
                        pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email',
                        }
                    })}
                   
                    className="form__inp" 
                    id="email" 
                    placeholder="Email" 
                    type="text"   
                    name="email"
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>} 
            </div>

            <div className="form__group">
                {/* <label className='form__label'htmlFor="password">Password</label> */}
                <input 
                    {...register('password',{
                        required: 'Password requierd',
                        maxLength:{
                            value:10,
                            message:'maximo 6 letras'
                        }
                    })}
               
                    className="form__inp" 
                    id="password"
                    placeholder="Password" 
                    type="password"
                    name="password"
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}   
            </div>

            <p className="error-message">{errorMessage}</p>

            <button className="form__btn-login" type="submit">
              Sing In 
            </button>

            <div className="form__text">
                <p>You do not have an account?</p>
                <a className="form__link" href="#"  onClick={onClickinLink}>
                Sign up
                </a>                     
            </div>

            <div className="form__or-line">
                <hr className="form__hr" />
                <span className="form__or-text">or</span>
                <hr className="form__hr" />
            </div>              

        </form>

        <ClickButton /> 

    </div>
  );
};

export default RegisterForm;