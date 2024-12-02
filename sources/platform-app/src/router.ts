import { lazy } from "react";
import { createHashRouter } from "react-router";
import { IndexPage } from "./pages/IndexPage.tsx";
import { PeoplePage } from "./pages/PeoplePage.tsx";

const StorybookPage = lazy(async () => {
  const { StorybookPage } = await import("./pages/StorybookPage.tsx");
  return { default: StorybookPage };
});

export const router = createHashRouter([
  { path: "/", Component: IndexPage },
  { path: "/people", Component: PeoplePage },
  { path: "/storybook", Component: StorybookPage },
]);
