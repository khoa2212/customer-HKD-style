export interface RedButtonProps {
  content: string;
  className?: string;
}

const RedButton = ({ content, className }: RedButtonProps) => {
  return (
    <button
      className={`bg-red-600 rounded-md text-white text-center px-4 py-2 hover:bg-white hover:text-red-1 border border-red-1 ${className}`}
    >
      {content}
    </button>
  );
};

export default RedButton;
