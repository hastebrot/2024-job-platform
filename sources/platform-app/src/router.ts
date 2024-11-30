import { lazy } from "react";
import { createHashRouter } from "react-router";
import { IndexPage } from "./pages/IndexPage.tsx";
import { PeoplePage } from "./pages/PeoplePage.tsx";

const StorybookPage = lazy(() =>
  import("./pages/StorybookPage.tsx").then((module) => ({
    default: module.StorybookPage,
  }))
);

export const router = createHashRouter([
  { path: "/", Component: IndexPage },
  { path: "/people", Component: PeoplePage },
  { path: "/storybook", Component: StorybookPage },
]);
