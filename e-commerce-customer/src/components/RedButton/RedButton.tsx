export interface RedButtonProps {
  content: string;
}

const RedButton = ({ content }: RedButtonProps) => {
  return (
    <button className="bg-red-600 rounded-md text-white text-center px-4 py-2 hover:bg-white hover:text-red-1 border border-red-1">
      {content}
    </button>
  );
};

export default RedButton;
