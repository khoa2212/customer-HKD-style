import { useNavigate } from "react-router-dom";
import RedButton from "../RedButton/RedButton";

export interface ErrorPageProps {
  statusMessage: string;
  message: string;
}

const ErrorPage = ({ statusMessage, message }: ErrorPageProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center gap-5">
      <span className="text-7xl">{statusMessage}</span>
      <span>{message}</span>
      <RedButton onClick={onClick} content="Back to home page" className="mt-5" />
    </div>
  );
};

export default ErrorPage;
