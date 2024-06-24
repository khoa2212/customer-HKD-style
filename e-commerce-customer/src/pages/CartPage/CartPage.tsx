import { useNavigate } from "react-router-dom";
import { CancelIcon } from "../../components/Icons/Icons";
import QuantityInput from "../../components/QuantityInput/QuantityInput";
import { myCart } from "./data";
import "./style.scss";
import { RedButton } from "../../components";

const CartPage = () => {
  const navigate = useNavigate();

  const onCancel = () => {};
  const onReturn = () => {
    navigate("/product-list");
  };
  const onUpdateCart = () => {};
  return (
    <div className="w-full">
      <span className="flex gap-2 text-slate-400">
        <span>Home</span>
        <span>/</span>
        <span>Manage account</span>
        <span className="text-black">/</span>
        <span className="text-black">Cart</span>
      </span>
      <table className="w-full mt-10">
        <thead className="text-left">
          <tr>
            <th className="py-4">Product</th>
            <th className="py-4">Price</th>
            <th className="py-4">Quantity</th>
            <th className="py-4">Subtotal</th>
            <th className="py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {myCart.cartItems.map((item, index) => (
            <tr
              key={item.id}
              className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
            >
              <td className="">
                <span className="flex items-center p-2 gap-2">
                  <img
                    className="w-14 h-14 object-cover"
                    src={item.product.attachment[0]}
                    alt={item.product.name}
                  />
                  <span className="break-words mt-2">{item.product.name}</span>
                </span>
              </td>
              <td>${item.product.price}</td>
              <td>
                <QuantityInput
                  quantity={item.quantity}
                  className="quantity-input"
                />
              </td>
              <td>${item.quantity * item.product.price}</td>
              <td>
                <span onClick={onCancel} title="Remove from card">
                  <CancelIcon className="text-white rounded-full bg-red-1 size-5 cursor-pointer" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-4 flex justify-between w-full">
        <button
          type="button"
          onClick={onReturn}
          className="p-2 rounded-md border border-black hover:border-red-1 hover:text-white hover:bg-red-1"
        >
          Return To Shop
        </button>
        <button
          onClick={onUpdateCart}
          type="button"
          className="p-2 rounded-md border border-black hover:border-red-1 hover:text-white hover:bg-red-1"
        >
          Update Cart
        </button>
      </div>
      <div className="py-4 flex justify-end w-full">
        <div className="rounded-sm p-4 border-2 border-black">
          <p className="font-bold">Cart total</p>
          <span className="w-full flex flex-col gap-2 mt-2 items-center">
            <span className="w-full py-2 border-b flex justify-between gap-48 text-sm">
              <span>Subtotal:</span>
              <span>$1750</span>
            </span>
            <span className="w-full py-2 border-b flex justify-between gap-48 text-sm">
              <span>Shipping:</span>
              <span>Free</span>
            </span>
            <span className="w-full py-2 border-b flex justify-between gap-48 text-sm">
              <span>Total:</span>
              <span>$1750</span>
            </span>
            <RedButton className="mt-2 w-2/3" content="Process to checkout" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
