import "./AuthTitle.scss";
import logo from "@/shared/images/logo.svg";

export const AuthTitle = ({
  withoutDescription,
}: {
  withoutDescription?: boolean;
}) => {
  return (
    <section className="authTitle__titleSection">
      <img src={logo} alt="logo" />
      {!withoutDescription && (
        <p className="authTitle__titleText">
          Merci d'entrer vos informations de connexion
        </p>
      )}
    </section>
  );
};
