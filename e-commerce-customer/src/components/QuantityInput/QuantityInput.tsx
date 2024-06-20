import { MinusIcon, PlusIcon } from "../Icons/Icons";
import "./style.scss";

export interface QuantityInputProps {
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

const QuantityInput = ({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityInputProps) => {
  return (
    <span className="flex">
      <button
        className="p-1 border rounded-l-md hover:bg-red-1 hover:text-white"
        onClick={() => onDecrease}
      >
        <MinusIcon />
      </button>
      <input
        defaultValue={quantity}
        type="number"
        className="outline-none p-1 border text-center"
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        onCopy={(e) => {
          e.preventDefault();
          return false;
        }}
        min={1}
      />
      <button
        className="p-1 bg-red-1 border border-red-1 hover:bg-white text-white hover:text-red-1 rounded-r-md"
        onClick={() => onIncrease}
      >
        <PlusIcon />
      </button>
    </span>
  );
};

export default QuantityInput;
