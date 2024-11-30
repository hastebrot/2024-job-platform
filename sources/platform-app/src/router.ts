import { lazy } from "react";
import { createHashRouter } from "react-router";
import { CandidatesPage } from "./pages/CandidatesPage.tsx";
import { IndexPage } from "./pages/IndexPage.tsx";

const StorybookPage = lazy(() =>
  import("./pages/StorybookPage.tsx").then((module) => ({
    default: module.StorybookPage,
  }))
);

export const router = createHashRouter([
  { path: "/", Component: IndexPage },
  { path: "/candidates", Component: CandidatesPage },
  { path: "/storybook", Component: StorybookPage },
]);
