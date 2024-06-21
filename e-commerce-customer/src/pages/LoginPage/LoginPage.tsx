import PhoneImage from '../../assets/phone.png';

const LoginPage = () => {
    return (
        <div className="h-4/5 flex justify-start gap-32 pr-48 py-24	">
            <img
                src={PhoneImage}
                alt="PhoneImage"
                className="flex-1 bg-blue-1 object-cover bg-transparent object-center"
            />

            <div className="py-32">
                <h1 className="text-2xl text-black font-medium pb-6">
                    Login to HKD Style
                </h1>
                <p className="pb-12">
                    Don't have an account?{' '}
                    <span className="text-red-500 cursor-pointer">
                        Sign up now
                    </span>
                </p>
                <form action="">
                    <div className="border-b-2 flex gap-2 mb-4">
                        <p className="opacity-50 w-24">Email</p>{' '}
                        <input autoFocus type="email" className="w-full" />
                    </div>
                    <div className="border-b-2 flex gap-2">
                        <p className="opacity-50 w-24">Password</p>{' '}
                        <input type="password" className="w-full" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white hover:bg-red-700 px-5 py-3 rounded-md mt-6"
                    >
                        Login
                    </button>
                </form>
                <p className="text-red-500 text-center mt-2 cursor-pointer">
                    Forgot password
                </p>
                <div className="flex py-3 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 mb-2 text-gray-400">
                        or
                    </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <button className="w-full px-5 py-3 rounded-md mt-3 border-2 hover:bg-slate-400">
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
