import "./style.scss";

export interface MessageIconProps {
  alt: string;
  icon: string;
  className: string;
  number: number;
}

const MessageIcon = ({ alt, icon, className, number }: MessageIconProps) => {
  return (
    <span
      className={`message cursor-pointer flex items-center justify-center relative before:flex before:items-center before:justify-center before:absolute before:bg-red-1 before:text-white before:rounded-full before:w-5 before:h-5 before:text-sm before:bottom-[65%] before:left-[50%] ${className}`}
      data-content={number}
    >
      <img src={icon} alt={alt} className="object-cover" />
    </span>
  );
};

export default MessageIcon;
