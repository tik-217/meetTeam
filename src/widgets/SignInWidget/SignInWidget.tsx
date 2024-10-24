import { InputPassword } from "@/entities/InputPassword/InputPassword";
import { InputDefault } from "@/entities/InputDefault/InputDefault";
import { SignInFooter } from "@/feature/SignInFooter/SignInFooter";
import { AuthTitle } from "@/feature/AuthTitle";
import "./SignInWidget.scss";

export const SignInWidget = () => {
  return (
    <form className="signInWidget">
      <AuthTitle />
      <div className="signInWidget__inputs">
        <InputDefault
          labelText={"Adresse e-mail"}
          type={"email"}
          placeholder={"force@adresseemail.com"}
        />
        <InputDefault
          labelText={"Numéro de téléphone"}
          type={"tel"}
          placeholder={"(+237) 696 88 77 55"}
        />
        <InputPassword
          labelText={"Mot de passe"}
          placeholder={"Your password"}
        />
        <InputPassword
          labelText={"Confirmer votre mot de passe"}
          placeholder={"Confirm your password"}
        />
      </div>
      <SignInFooter />
    </form>
  );
};
