import { lazy } from "react";
import { createHashRouter } from "react-router";
import { EmployeeCreatePage } from "./pages/EmployeeCreatePage.tsx";
import { EmployeeDetailsPage } from "./pages/EmployeeDetailsPage.tsx";
import { EmployeeListPage } from "./pages/EmployeeListPage.tsx";
import { IndexPage } from "./pages/IndexPage.tsx";

const StorybookPage = lazy(async () => {
  const { StorybookPage } = await import("./pages/StorybookPage.tsx");
  return { default: StorybookPage };
});

export const router = createHashRouter([
  { path: "/", Component: IndexPage },
  { path: "/people/employee-list", Component: EmployeeListPage },
  { path: "/people/employee-details", Component: EmployeeDetailsPage },
  { path: "/people/employee-create", Component: EmployeeCreatePage },
  { path: "/storybook", Component: StorybookPage },
]);
