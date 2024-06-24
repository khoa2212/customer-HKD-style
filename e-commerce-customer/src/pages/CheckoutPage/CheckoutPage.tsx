import { RedButton } from '../../components';
import { CheckIcon } from '../../components/Icons/Icons';
import './style.scss';

const data = [
    {
        image: 'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770330/products/wchbo34j2ienzuaaqr0i.png',
        name: 'LCD Monitor',
        price: 100,
        quantity: 2,
    },
    {
        image: 'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/f3chxyhirztctbcxk2sf.png',
        name: 'H1 Gamepad',
        price: 1000,
        quantity: 4,
    },
];

const CheckoutPage = () => {
    return (
        <div className="pb-52">
            <span className="flex gap-2 text-slate-400">
                <span>Home</span>
                <span>/</span>
                <span>Manage account</span>
                <span>/</span>
                <span>Cart</span>
                <span className="text-black">/</span>
                <span className="text-black">Checkout</span>
            </span>
            <p className="font-bold text-2xl mt-12 mb-9">Billing Details</p>
            <div className="flex flex-col sm:flex-row sm:gap-40">
                <div className="flex flex-col gap-6 text-slate-600 flex-1">
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Full name <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-gray-1 rounded border p-2 outline-none focus:border-red-1"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Stress Address
                            <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-gray-1 rounded border p-2 outline-none focus:border-red-1"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Town/city <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-gray-1 rounded border p-2 outline-none focus:border-red-1"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Phone number <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-gray-1 rounded border p-2 outline-none focus:border-red-1"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Email address
                            <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-gray-1 rounded border p-2 outline-none focus:border-red-1"
                        />
                    </div>
                    <div className="flex flex-row sm:gap-2 items-center">
                        <span className="bg-gray-1 hover:bg-gray-300 border rounded-sm w-6 h-5 sm:h-6 relative">
                            <input
                                type="checkbox"
                                className="check-box cursor-pointer w-full h-full opacity-0"
                            />
                            <span className="absolute top-0 left-0 w-full h-full bg-red-1 flex items-center justify-center check-mark cursor-pointer object-cover">
                                <CheckIcon />
                            </span>
                        </span>
                        <p>
                            Save this information for faster check-out next time
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    <div className="flex flex-col gap-5">
                        {data.map((item) => (
                            <div
                                className="flex items-center gap-7"
                                key={item.image}
                            >
                                <span className="w-11">
                                    <img
                                        className="object-cover"
                                        src={item.image}
                                        alt={item.image}
                                    />
                                </span>
                                <p className="flex-1 items-center mt-4">
                                    {item.name}
                                </p>
                                <p className="mt-4">
                                    ${item.price * item.quantity}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex border-b-2 pb-3 mt-2">
                        <p className="flex-1">Subtotal</p>
                        <p>$650</p>
                    </div>
                    <div className="flex border-b-2 pb-3">
                        <p className="flex-1">Shipping</p>
                        <p>Free</p>
                    </div>
                    <div className="flex pb-3">
                        <p className="flex-1">Total</p>
                        <p>$650</p>
                    </div>
                    <RedButton content="Place order" className="w-fit" />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
