import { IInputDefaultProps } from "./InputDefault.types";
import "./InputDefault.scss";

export const InputDefault = ({
  labelText,
  type,
  placeholder,
}: IInputDefaultProps) => {
  return (
    <div className="inputDefault inputsRequired">
      <label className="inputDefault__label" htmlFor="inputDefaultId">
        {labelText}
      </label>
      <input
        className="inputDefault__input"
        type={type}
        id="inputDefaultId"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
