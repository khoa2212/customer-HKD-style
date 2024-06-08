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
    <div className="relative w-full h-[inherit]">
      <div className="relative rounded-lg">
        {props.images.map((item, index) => (
          <div
            key={item}
            className={`${
              index !== selectedIndex && "hidden"
            } duration-700 ease-in-out flex justify-center h-full w-full}`}
          >
            <img src={item} className="w-1/3" alt="image1" />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {props.images.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`${
              index !== selectedIndex ? "bg-slate-400" : "bg-black"
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
