import { ErrorPage } from "../../components";

const ForbiddenPage = () => {
  return (
    <ErrorPage
      statusMessage="403 Forbidden"
      message="Your visited page is forbidden. You may go home page."
    />
  );
};

export default ForbiddenPage;
