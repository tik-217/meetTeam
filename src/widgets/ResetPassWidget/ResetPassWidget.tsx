import { ForgotPassFooter } from "@/feature/ForgotPassFooter";
import { InputPassword } from "@/entities/InputPassword";
import { AuthTitle } from "@/feature/AuthTitle";
import "./ResetPassWidget.scss";

export const ResetPassWidget = () => {
  return (
    <form className="resetPassWidget">
      <AuthTitle />
      <InputPassword
        labelText="Nouveau mot de passe"
        placeholder="You new password"
      />
      <InputPassword
        labelText="Confirmer votre mot de passe"
        placeholder="Confirm new password"
      />
      <ForgotPassFooter
        btnText={"Modifier"}
        linkText={"Retour à la page connexion"}
        linkPath={"/auth"}
      />
    </form>
  );
};
