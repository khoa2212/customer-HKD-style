export interface MessageIconProps {
  alt: string;
  icon: string;
  className: string;
  number: number;
}

const MessageIcon = (props: MessageIconProps) => {
  return (
    <span className={`cursor-pointer flex items-center justify-center relative before:content-['${props.number}'] before:flex before:items-center before:justify-center before:absolute before:bg-red-1 before:text-white before:rounded-full before:w-5 before:h-5 before:text-sm before:bottom-[65%] before:left-[50%] ${props.className}`}>
      <img src={props.icon} alt={props.alt} className="object-cover" />
    </span>
  );
};

export default MessageIcon;
