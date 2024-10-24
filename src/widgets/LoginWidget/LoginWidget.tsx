import { LoginFooter } from "@/feature/LoginFooter/LoginFooter";
import { LoginInputs } from "@/feature/LoginInputs/LoginInputs";
import logo from "@/shared/images/logo.svg";
import "./LoginWidget.scss";

export const LoginWidget = () => {
  return (
    <form className="loginWidget">
      <section className="loginWidget__titleSection">
        <img src={logo} alt="logo" />
        <p className="loginWidget__titleText">
          Merci d'entrer vos informations de connexion
        </p>
      </section>
      <LoginInputs />
      <LoginFooter />
    </form>
  );
};
