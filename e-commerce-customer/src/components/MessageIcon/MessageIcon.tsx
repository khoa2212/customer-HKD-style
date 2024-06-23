import { ReactNode } from "react";
import "./style.scss";

export interface MessageIconProps {
  children: ReactNode;
  className: string;
  number: number;
}

const MessageIcon = ({ children, className, number }: MessageIconProps) => {
  return (
    <span
      className={`message cursor-pointer flex items-center justify-center relative before:flex before:items-center before:justify-center before:absolute before:bg-red-1 before:text-white before:rounded-full before:w-4 before:h-4 before:text-xs before:bottom-[55%] before:left-[48%] ${className}`}
      data-content={number}
    >
      {children}
    </span>
  );
};

export default MessageIcon;
