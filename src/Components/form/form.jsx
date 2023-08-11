/* eslint-disable react/prop-types */
import ClickButton from '../buttonGoogle/btnGoogle';

import './form.css';

const Form = ({
  onSubmit,
  buttonText,
  questionText,
  navigateToView,
  linkText,
  register,
  handleSubmit,
  errors,
  errorMessage
}) => {
  const onClickLoginLink = () => {
    navigateToView();
  };

  return (
    <div className="column">
      <form
        className="form__content"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form__group">
          <label className='form__label' htmlFor="email">Correo electrónico</label>
          <input
            {...register("email", {
              required: "Se requiere contraseña",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email inválido",
              },
            })}
            className="form__inp"
            id="email"
            placeholder="Ejemplo@ejemplo.com"
            type="text"
            name="email"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form__group">
          <label className='form__label'htmlFor="password">Contraseña</label>
          <input
            {...register("password", {
              required: "*Se requiere contraseña",
              minLength: {
                value: 4,
                message: "*Contraseña demasiado corta",
              },
              maxLength: {
                value: 9,
                message: "*Contraseña demasiado larga, máximo 10 caracteres",
              },
            })}
            className="form__inp"
            id="password"
            placeholder="*********"
            type="password"
            name="password"
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <p className="error-message">{errorMessage}</p>

        <button className="form__btn-login" type="submit">
          {buttonText} 
        </button>
        <div className="form__or-line">
          <hr className="form__hr" />
          <span className="form__or-text">o</span>
          <hr className="form__hr" />
        </div>
        <ClickButton /> 

        <div className="form__text">
          <p>{questionText}</p>
          <a className="form__link" href="#" onClick={onClickLoginLink}>
          {linkText}
          </a>
        </div>

     
      </form>

      
    </div>
  );
};

export default Form;
