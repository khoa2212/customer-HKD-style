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
    <div className="relative px-2 w-full h-[350px]">
      <div className="relative w-full bg-transparent overflow-hidden h-full">
        {props.images.map((item, index) => (
          <div
            key={item}
            className={`${
              index !== selectedIndex
                ? "scale-0 h-0 opacity-0"
                : "h-full scale-1 opacity-100"
            } transition-all duration-100 ease-linear flex justify-center items-center overflow-hidden`}
          >
            <img
              src={item}
              alt={item}
              className="shrink-0 min-w-full min-h-full object-contain"
            />
          </div>
        ))}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {props.images.map((item, index) => (
            <button
              key={item}
              type="button"
              className={`${
                index !== selectedIndex
                  ? "bg-slate-400"
                  : "bg-red-1 border border-white scale-125"
              } w-3 h-3 rounded-full`}
              aria-current="false"
              onClick={() => onChangeImage(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
