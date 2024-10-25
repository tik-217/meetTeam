import { InputDefault } from "@/entities/InputDefault";
import "./ForgotPassWidget.scss";
import { AuthTitle } from "@/feature/AuthTitle";
import { ForgotPassFooter } from "@/feature/ForgotPassFooter";

export const ForgotPassWidget = () => {
  return (
    <form className="forgotPassWidget">
      <AuthTitle withoutDescription={true} />
      <InputDefault
        labelText="Adresse e-mail"
        type="email"
        placeholder="force@adresseemail.com"
      />
      <ForgotPassFooter
        btnText={"Se connecter"}
        linkText={"Retour à la page connexion"}
        linkPath={"/auth"}
      />
    </form>
  );
};
