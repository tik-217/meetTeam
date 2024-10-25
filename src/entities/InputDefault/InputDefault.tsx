import { IInputDefaultProps } from "@/shared/types/InputTypes";
import "./InputDefault.scss";
import { v4 as uuidv4 } from "uuid";

export const InputDefault = ({
  labelText,
  type,
  placeholder,
}: Partial<IInputDefaultProps>) => {
  const inputId = uuidv4();

  return (
    <div className="inputDefault">
      <label className="inputDefault__label" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        className="inputDefault__input"
        type={type}
        id={inputId}
        placeholder={placeholder}
      />
    </div>
  );
};
