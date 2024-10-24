import { InputDefault } from "@/entities/InputDefault";
import { InputPassword } from "@/entities/InputPassword";
import "./LoginInputs.scss";

export const LoginInputs = () => {
  return (
    <div className="loginInputs">
      <InputDefault
        labelText={"Email"}
        type={"email"}
        placeholder={"Adresse email ou numéro de téléphone"}
      />
      <InputPassword labelText={"Mot de passe"} placeholder={"Your password"} />
    </div>
  );
};
