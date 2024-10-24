import { InputDefault } from "@/entities/InputDefault/InputDefault";
import { InputPassword } from "@/entities/InputPassword/InputPassword";
import "./LoginInputs.scss";

export const LoginInputs = () => {
  return (
    <div className="loginInputs">
      <InputDefault
        labelText={"Email"}
        required={true}
        type={"email"}
        placeholder={"Adresse email ou numéro de téléphone"}
      />
      <InputPassword
        labelText={"Mot de passe"}
        placeholder={"Your password"}
        required={true}
      />
    </div>
  );
};
