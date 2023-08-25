import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import firebase from "../../lib/auth";
import Form from "../../Components/form/form";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
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
          console.log("Oops! That email or password are incorrect");
          setErrorMessage('Oops! Ese correo o contraseña son incorrectos');
        }
      });
  };

  const onClickinLink = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <main>
        <section className="login__body">
          <h1 className="login__title">Lab Notas</h1>
          <Form
            onSubmit={onSubmitLogin}
            buttonText='Iniciar sesión'
            questionText='¿Aún no tienes cuenta?'
            navigateToView={onClickinLink}
            linkText='Regístrate'
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            errorMessage={errorMessage}
          />
        </section>
      </main>
    </div>
  );
};

export default Login;
