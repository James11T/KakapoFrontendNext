import ErrorPage from "../components/ErrorPage/ErrorPage";

const error500 = () => (
  <ErrorPage code="500" message="Internal Server Error." />
);

export default error500;
