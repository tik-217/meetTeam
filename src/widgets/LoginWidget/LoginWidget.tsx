import { LoginFooter } from "@/feature/LoginFooter";
import { LoginInputs } from "@/feature/LoginInputs";
import { AuthTitle } from "@/feature/AuthTitle";
import "./LoginWidget.scss";

export const LoginWidget = () => {
  return (
    <form className="loginWidget">
      <AuthTitle />
      <LoginInputs />
      <LoginFooter />
    </form>
  );
};
