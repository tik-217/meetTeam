import { Loader } from "@/entities/Loader/Loader";
import { ReactNode, Suspense } from "react";

export const SuspenseProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => <Suspense fallback={<Loader />}>{children}</Suspense>;
