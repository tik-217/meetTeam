import { ReactNode } from "react";
import { useRouteError } from "react-router-dom";

import "./ErrorProvider.scss";

export const ErrorProvider = (): ReactNode => {
  const error = useRouteError();

  console.error(error);

  return <h2 className="errorTitle">Неизвестная ошибка</h2>;
};
