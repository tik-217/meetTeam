import { useState } from "react";
import { IInputDefaultProps } from "../InputDefault/InputDefault.types";
import "./InputPassword.scss";
import { EyseSvg } from "@/shared/icons/svg/Eyse";

export const InputPassword = ({
  labelText,
  placeholder,
}: Partial<IInputDefaultProps>) => {
  const [passVisible, setPassVisible] = useState(false);

  const passwordVisible = () => setPassVisible(!passVisible);

  return (
    <div className="inputPassword">
      <label className="inputPassword__label" htmlFor="inputPassword">
        {labelText}
      </label>
      <div className="inputPassword__inputSection">
        <input
          className="inputPassword__input"
          type={passVisible ? "text" : "password"}
          id="inputPassword"
          placeholder={placeholder}
          required
        />
        <div
          className="inputPassword__openBtn"
          onClick={() => passwordVisible()}
        >
          <EyseSvg />
        </div>
      </div>
    </div>
  );
};
