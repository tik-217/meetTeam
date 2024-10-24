import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Authentication } from "../pages/Authentication/Authentication";
import { ErrorProvider } from "@/shared/providers/ErrorProvider/ErrorProvider";

const routerProvider = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorProvider />}>
      <Route path="/" element={<Authentication />} />
    </Route>
  )
);

export function MainRouting() {
  return <RouterProvider router={routerProvider} />;
}
