import { CATEGORIES } from "./data";

const Header = () => {
  return (
    <div className="flex flex-col gap-4 border-r-2 basis-1/3">
      {Object.entries(CATEGORIES).map((entry) => {
        return (
          <div
            key={entry[0]}
            className="hover:text-red-1 cursor-pointer"
          >
            {entry[1]}
          </div>
        );
      })}
    </div>
  );
};

export default Header;
