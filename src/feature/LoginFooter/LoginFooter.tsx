import { ButtonDefault } from "@/entities/ButtonDefault";
import { ArrowRight } from "@/shared/icons/svg/ArrowRight";
import { Link } from "react-router-dom";
import "./LoginFooter.scss";

export const LoginFooter = () => {
  return (
    <div className="loginFooter">
      <Link to={"/forgot-password"} className="loginFooter__forgotPassword">
        Mot de passe oublié ?
      </Link>
      <div className="loginFooter__button">
        <ButtonDefault text={"Se connecter"} img={<ArrowRight />} />
      </div>
      <div>
        <span>Vous n'avez pas de compte ? </span>
        <Link to={"/sign-in"} className="loginFooter__linkForgotPassword">
          Créer un compte
        </Link>
      </div>
    </div>
  );
};
