import { ReactNode } from "react";
import "./ButtonDefault.scss";

interface IButtonDefaultProps {
  text: string;
  img: ReactNode;
}

export const ButtonDefault = ({ text, img }: IButtonDefaultProps) => {
  return (
    <div className="buttonDefault">
      <button className="buttonDefault__btn">{text}</button>
      {img}
    </div>
  );
};
