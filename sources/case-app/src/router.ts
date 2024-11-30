import { lazy } from "react";
import { createHashRouter } from "react-router";
import { CasesPage } from "./pages/CasesPage.tsx";
import { IndexPage } from "./pages/IndexPage.tsx";

const StorybookPage = lazy(() =>
  import("./pages/StorybookPage.tsx").then((module) => ({
    default: module.StorybookPage,
  }))
);

export const router = createHashRouter([
  { path: "/", Component: IndexPage },
  { path: "/cases", Component: CasesPage },
  { path: "/storybook", Component: StorybookPage },
]);
