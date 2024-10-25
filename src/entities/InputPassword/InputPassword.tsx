import { useState } from "react";
import "./InputPassword.scss";
import { EyseSvg } from "@/shared/icons/svg/Eyse";
import { IInputDefaultProps } from "@/shared/types/InputTypes";
import { v4 as uuidv4 } from "uuid";

export const InputPassword = ({
  labelText,
  placeholder,
}: Partial<IInputDefaultProps>) => {
  const [passVisible, setPassVisible] = useState(false);

  const inputId = uuidv4();

  const passwordVisible = () => setPassVisible(!passVisible);

  return (
    <div className="inputPassword">
      <label className="inputPassword__label" htmlFor={inputId}>
        {labelText}
      </label>
      <div className="inputPassword__inputSection">
        <input
          className="inputPassword__input"
          type={passVisible ? "text" : "password"}
          id={inputId}
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
