const Header = () => {
    return (
        <div className="flex flex-col gap-4 border-r-2 basis-1/3">
            <div className="hover:text-red-1 cursor-pointer">Woman’s Fashion</div>
            <div className="hover:text-red-1 cursor-pointer">Men’s Fashion</div>
            <div className="hover:text-red-1 cursor-pointer">Kid’s Fashion</div>
            <div className="hover:text-red-1 cursor-pointer">Home & Lifestyle</div>
            <div className="hover:text-red-1 cursor-pointer">Medicine </div>
            <div className="hover:text-red-1 cursor-pointer">Sports & Outdoor</div>
            <div className="hover:text-red-1 cursor-pointer">Baby’s & Toys</div>
            <div className="hover:text-red-1 cursor-pointer">Groceries & Pets</div>
            <div className="hover:text-red-1 cursor-pointer">Health & Beauty</div>
        </div>
    );
};

export default Header;
