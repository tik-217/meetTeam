import { Link } from "react-router-dom";
import "./TermsCheckbox.scss";

export const TermsCheckbox = () => {
  return (
    <div className="termsCheckbox">
      <input
        className="termsCheckbox__checkbox"
        type="checkbox"
        name="terms"
        id="termsId"
      />
      <label className="termsCheckbox__label" htmlFor="termsId">
        J'accepte{" "}
        <Link to="/">les termes et les conditions d'utilisation.</Link>
      </label>
    </div>
  );
};
