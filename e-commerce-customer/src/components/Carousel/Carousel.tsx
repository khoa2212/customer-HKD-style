import { useState } from "react";

export interface CarouselProps {
  images: string[];
}

const Carousel = (props: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onChangeImage = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="relative px-2 w-full h-[inherit]">
      <div className="relative bg-white w-full h-full">
        {props.images.map((item, index) => (
          <div
            key={item}
            className={`${
              index !== selectedIndex && "hidden"
            } transition-all duration-700 ease-in-out flex justify-center items-center h-full w-full}`}
          >
            <img src={item} className="object-fill w-1/2 h-full" alt={item} />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {props.images.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`${
              index !== selectedIndex ? "bg-white" : "bg-red-1"
            } w-3 h-3 rounded-full`}
            aria-current="false"
            onClick={() => onChangeImage(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
