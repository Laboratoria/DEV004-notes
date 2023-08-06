// import React from 'react';
import './form.css';
import iconGoogle from '../../assets/google.png';



// eslint-disable-next-line react/prop-types
const Form = ({ email, password, setEmail, setPassword, errorMessage,  linkText, buttonText, onLoginButtonClick ,onGoogleButtonClick }) => {

  return (
    <div className="column">

        <form className="form__content" action="#">

            <div className="form__group">
                <label className='form__label' htmlFor="email">Email</label>
                <input 
                data-testid="email"
                className="form__inp" 
                id="email" 
                placeholder="example@example.com" 
                type="text"   
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form__group">
                <label className='form__label'htmlFor="password">Password</label>
                <input 
                data-testid="password"
                className="form__inp" 
                id="password"
                placeholder="*******" 
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                
            </div>

            <p className="error-message">{errorMessage}</p>

            <button className="form__btn-login" type="submit" onClick={onLoginButtonClick}>
                {buttonText} 
            </button>

            <div className="form__text">
                <p>You do not have an account?</p>
                <a className="form__link" href="#">
                    {linkText}
                </a>                     
            </div>

            <div className="form__or-line">
                <hr className="form__hr" />
                <span className="form__or-text">or</span>
                <hr className="form__hr" />
            </div>              

        </form>

        <div className='form__box-google'onClick={onGoogleButtonClick}>
            <button className="form__btn-google" type="button" >
                <img className='form__icon-google'src={iconGoogle} alt="Google" />
                Login with Google
            </button>
        </div>

    </div>
  );
};

export default Form;