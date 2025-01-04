import { useEffect } from "react";
import { useNavigate } from "react-router";
import { PageLayout } from "../layouts/PageLayout";

export const IndexPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/people/employee-details");
  }, []);

  return <PageLayout>index page</PageLayout>;
};
