import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../lib/auth";
import RegisterForm from "../../Components/form/registerForm";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitRegister = (data) => {
    firebase()
      .createUser(data.email, data.password)
      .then((user) => {
        console.log(user);
        if (user) {
          navigate("/wall");
        } else {
          console.log("Oops! That username or password are incorrect");
          // setErrorMessage('Oops! That username or password are incorrect');
        }
      });
  };

  const onClickinLink = () => {
    navigate("/");
  };

  return (
    <div className="register">
      <main>
        <section className="register__body">
          <h1 className="register__title">Register</h1>
          <RegisterForm
            onSubmit={onSubmitRegister}
            navigateToRegister={onClickinLink}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </section>
      </main>
    </div>
  );
};

export default Register;
