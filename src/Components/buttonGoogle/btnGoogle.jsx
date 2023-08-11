import firebase from "../../lib/auth";
import { useNavigate } from "react-router-dom";
import iconGoogle from "../../assets/google.png";
import "./btnGoogle.css";

const ClickButton = () => {
  const navigate = useNavigate();

  const handleClickGoogle = (e) => {
    e.preventDefault();
    console.log("navegar...");

    firebase()
      .singGoogle()
      .then((result) => {
        console.log("Result from singGoogle:", result);
        if (result) {
          console.log("Navigating to /wall...");
          navigate("/Wall");
        }
      })

      .catch((error) => {
        console.log("Error during singGoogle:", error);
      });
  };

  return (
    <div className="form__box-google">
      <button
        className="form__btn-google"
        type="button"
        onClick={handleClickGoogle}
      >
        <img className="form__icon-google" src={iconGoogle} alt="Google" />
        Iniciar sesión con google
      </button>
    </div>
  );
};

export default ClickButton;
