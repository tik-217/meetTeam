import "./AuthTitle.scss";
import logo from "@/shared/images/logo.svg";

export const AuthTitle = () => {
  return (
    <section className="authTitle__titleSection">
      <img src={logo} alt="logo" />
      <p className="authTitle__titleText">
        Merci d'entrer vos informations de connexion
      </p>
    </section>
  );
};
