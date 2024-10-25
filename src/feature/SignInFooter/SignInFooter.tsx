import { Link } from "react-router-dom";
import { TermsCheckbox } from "@/feature/TermsCheckbox";
import { ButtonDefault } from "@/entities/ButtonDefault";
import "./SignInFooter.scss";

export const SignInFooter = () => {
  return (
    <div className="signInFooter">
      <div className="signInFooter__terms">
        <TermsCheckbox />
      </div>
      <ButtonDefault text={"S'inscrire"} />
      <div className="signInFooter__loginBtn">
        <span>
          Vous possedez déjà un compte ?{" "}
          <Link to={"/auth"} className="signInFooter__link">
            Se connecter
          </Link>
        </span>
      </div>
    </div>
  );
};
