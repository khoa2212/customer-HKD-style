import { ErrorPage } from "../../components";

const Error404Page = () => {
  return (
    <ErrorPage
      statusMessage="404 Not Found"
      message="Your visited page not found. You may go home page."
    />
  );
};

export default Error404Page;
