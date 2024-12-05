import { useEffect } from "react";
import { useNavigate } from "react-router";
import { PageLayout } from "./PageLayout";

export const IndexPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/people/employee-create");
  }, []);

  return <PageLayout>index page</PageLayout>;
};
