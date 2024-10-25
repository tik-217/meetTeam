import { ButtonDefault } from "@/entities/ButtonDefault";
import { Link } from "react-router-dom";
import "./ForgotPassFooter.scss";

export const ForgotPassFooter = ({
  btnText,
  linkText,
  linkPath,
}: {
  btnText: string;
  linkText: string;
  linkPath: string;
}) => {
  return (
    <div className="forgotPassFooter">
      <ButtonDefault text={btnText} />
      <Link to={linkPath} className="forgotPassFooter__link">
        {linkText}
      </Link>
    </div>
  );
};
