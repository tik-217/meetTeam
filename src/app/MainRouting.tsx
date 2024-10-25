import { ResetPass } from "@/pages/ResetPass/ResetPass";
import { SignIn } from "@/pages/SignIn/SignIn";
import { SuspenseProvider } from "@/shared/providers/SuspenseProvider/SuspenseProvider";
import { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Authentication = lazy(() =>
  import("@/pages/Authentication").then(({ Authentication }) => ({
    default: Authentication,
  }))
);

const ForgotPass = lazy(() =>
  import("@/pages/ForgotPass").then(({ ForgotPass }) => ({
    default: ForgotPass,
  }))
);

const Dashboard = lazy(() =>
  import("@/pages/Dashboard").then(({ Dashboard }) => ({
    default: Dashboard,
  }))
);

const ErrorProvider = lazy(() =>
  import("@/shared/providers/ErrorProvider").then(({ ErrorProvider }) => ({
    default: ErrorProvider,
  }))
);

const routerProvider = createBrowserRouter(
  createRoutesFromElements(
    <Route
      errorElement={
        <SuspenseProvider>
          <ErrorProvider />
        </SuspenseProvider>
      }
    >
      <Route
        path="/auth"
        element={
          <SuspenseProvider>
            <Authentication />
          </SuspenseProvider>
        }
      />
      <Route
        path="/dashboard"
        element={
          <SuspenseProvider>
            <Dashboard />
          </SuspenseProvider>
        }
      />
      <Route
        path="/sign-in"
        element={
          <SuspenseProvider>
            <SignIn />
          </SuspenseProvider>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <SuspenseProvider>
            <ForgotPass />
          </SuspenseProvider>
        }
      />
      <Route
        path="/reset-password"
        element={
          <SuspenseProvider>
            <ResetPass />
          </SuspenseProvider>
        }
      />
    </Route>
  )
);

export function MainRouting() {
  return <RouterProvider router={routerProvider} />;
}
