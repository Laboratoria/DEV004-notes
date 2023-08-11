import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import firebase from "../../lib/auth";
import Form from "../../Components/form/form";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitRegister = (data) => {
    firebase()
      .createUser(data.email, data.password)
      .then((user) => {
        console.log(user);
        if (user) {
          navigate("/wall");
        } else {
          console.log("Oops! That username or password are incorrect");
          setErrorMessage('Oops! That username or password are incorrect');
        }
      });
  };

  const onClickinLink = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <main>
        <section className="login__body">
          <h1 className="login__title-register">Regístrate</h1>
          <Form
            onSubmit={onSubmitRegister}
            buttonText='Registrarme'
            questionText='¿Ya tienes cuenta?'
            navigateToView={onClickinLink}
            linkText='Inicia sesión'
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

export default Register;
