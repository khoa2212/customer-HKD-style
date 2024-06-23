export interface RedButtonProps {
  content: string;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

const RedButton = ({ type, content, className, onClick }: RedButtonProps) => {
  return (
    <button
      className={`bg-red-600 rounded-md text-white text-center px-4 py-2 hover:bg-white hover:text-red-1 border border-red-1 ${className}`}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
};

export default RedButton;
