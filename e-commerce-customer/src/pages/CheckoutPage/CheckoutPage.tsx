import { CheckIcon } from '../../components/Icons/Icons';
import BkashIcon from '../../assets/Bkash.png';
import NagadIcon from '../../assets/Nagad.png';
import VisaIcon from '../../assets/Visa.png';

const CheckoutPage = () => {
    return (
        <div className="pb-52">
            <h2 className="font-bold text-xl mb-9">Billing Details</h2>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-40">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Fullname <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-slate-100 rounded h-12"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Stress Address
                            <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-slate-100 rounded h-12"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Town/city <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-slate-100 rounded h-12"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Phone number <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-slate-100 rounded h-12"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base">
                            Email address{' '}
                            <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            className="w-full bg-slate-100 rounded h-12"
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="bg-red-500 rounded cursor-pointer">
                            <CheckIcon />
                        </div>
                        <p>
                            Save this information for faster check-out next time
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-1 sm:pt-10 sm:pr-72">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-7">
                            <img
                                className="w-24 h-24 object-cover rounded"
                                src="https://res.cloudinary.com/dtzgqc50b/image/upload/v1717983701/products/z7bpvlwdkqe0jbf8tunz.jpg"
                                alt="abc"
                            />
                            <p className="flex-1">LCD Monitor</p>
                            <p>$650</p>
                        </div>
                        <div className="flex items-center gap-7">
                            <img
                                className="w-24 h-24 object-cover rounded"
                                src="https://res.cloudinary.com/dtzgqc50b/image/upload/v1717983701/products/z7bpvlwdkqe0jbf8tunz.jpg"
                                alt="abc"
                            />
                            <p className="flex-1">LCD Monitor</p>
                            <p>$650</p>
                        </div>
                    </div>
                    <div className="flex border-b-2 pb-3">
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

                    <div className="flex gap-3 items-center rounded">
                        <input
                            id="bordered-radio-1"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            className="w-4 h-4 "
                        />
                        <label
                            htmlFor="bordered-radio-1"
                            className="w-full text-sm font-medium text-gray-900"
                        >
                            Cash on delivery
                        </label>
                    </div>
                    <div className="flex gap-3 items-center rounded">
                        <input
                            id="bordered-radio-2"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            className="w-4 h-4 "
                        />
                        <label
                            htmlFor="bordered-radio-2"
                            className="w-full text-sm font-medium text-gray-900"
                        >
                            Bank
                        </label>
                        <img
                            src={BkashIcon}
                            alt={'BkashIcon'}
                            className="object-cover"
                        />
                        <img
                            src={NagadIcon}
                            alt={'NagadIcon'}
                            className="object-cover"
                        />
                        <img
                            src={VisaIcon}
                            alt={'VisaIcon'}
                            className="object-cover"
                        />
                    </div>
                    <button className="bg-red-500 text-white w-fit inline-block px-5 py-3 rounded">
                        Place order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
