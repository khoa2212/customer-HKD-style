const TopHeader = () => {
  return (
    <div className="w-full bg-black py-2 flex">
      <span className="basis-2/3 text-sm flex gap-2 justify-end">
        <span className="text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <span className="underline text-white font-bold cursor-pointer hover:text-red-1">ShopNow</span>
      </span>
      <span className="flex justify-end basis-1/3">
        <select
          className="mr-3 text-white bg-black outline-none cursor-pointer hover:text-red-1"
          name="language-dropdown"
          id="language-dropdown"
        >
          <option value="english">English</option>
          <option value="vietnamese">Vietnamese</option>
        </select>
      </span>
    </div>
  );
};

export default TopHeader;
