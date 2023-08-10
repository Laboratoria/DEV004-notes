/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import firebase from "../../lib/auth";
import ClickButton from "../buttonGoogle/btnGoogle";
import "./loginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  // hook para personalizar errores en los inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitLogin = (data) => {
    firebase()
      .signIn(data.email, data.password)
      .then((user) => {
        console.log(user);
        if (user) {
          navigate("/wall");
        } else {
          console.log("Oops! That username or password are incorrect");
          setErrorMessage("'Oops! That username or password are incorrect");
        }
      });
  };

  const onClickinLink = () => {
    navigate("/register");
  };

  return (
    <div className="column">
      <form
        className="form__content"
        action="#"
        onSubmit={handleSubmit(onSubmitLogin)}
      >
        <div className="form__group">
          {/* <label className='form__label' htmlFor="email">Email</label> */}
          <input
            {...register("email", {
              required: "* Email required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            className="form__inp"
            id="email"
            placeholder="Email"
            type="text"
            name="email"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form__group">
          {/* <label className='form__label'htmlFor="password">Password</label> */}
          <input
            {...register("password", {
              required: "* Password requierd",
              minLength: {
                value: 4,
                message: "*Password too short",
              },
              maxLength: {
                value: 10,
                message: "*Password too long, maximum 10 characters",
              },
            })}
            className="form__inp"
            id="password"
            placeholder="Password"
            type="password"
            name="password"
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <p className="error-message">{errorMessage}</p>

        <button className="form__btn-login" type="submit">
          Login
        </button>

        <div className="form__text">
          <p>You do not have an account?</p>
          <a className="form__link" href="#" onClick={onClickinLink}>
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

export default LoginForm;
