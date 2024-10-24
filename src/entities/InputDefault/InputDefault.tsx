import { IInputDefaultProps } from "@/shared/types/InputTypes";
import "./InputDefault.scss";

export const InputDefault = ({
  labelText,
  type,
  placeholder,
}: Partial<IInputDefaultProps>) => {
  return (
    <div className="inputDefault">
      <label className="inputDefault__label" htmlFor="inputDefaultId">
        {labelText}
      </label>
      <input
        className="inputDefault__input"
        type={type}
        id="inputDefaultId"
        placeholder={placeholder}
      />
    </div>
  );
};
