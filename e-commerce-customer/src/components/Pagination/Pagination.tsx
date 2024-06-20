export interface PaginationProps {
  start: number;
  end: number;
  totalPages: number;
  curPage: number;
  isFirst: boolean;
  isLast: boolean;
  onNext: (page: number) => void;
  onPrev: (page: number) => void;
  onCurPage: (page: number) => void;
}

const Pagination = ({
  start,
  end,
  totalPages,
  curPage,
  isFirst,
  isLast,
  onCurPage,
  onNext,
  onPrev,
}: PaginationProps) => {
  const resetNumberOfPages = (index: number) => {
    return start + index;
  };

  const renderBtnNum = () => {
    return Array.from({ length: end - start + 1 }, (_, index) =>
      resetNumberOfPages(index)
    ).map((item) => (
      <span
        key={item}
        className={`hover:bg-red-1 hover:text-white rounded-full w-6 h-6 p-2 flex justify-center items-center cursor-pointer ${
          item > totalPages
            ? "pointer-events-none bg-gray-500"
            : item === curPage
            ? "bg-red-1 text-white"
            : "bg-slate-200"
        }`}
        onClick={() => onCurPage(item)}
      >
        {item}
      </span>
    ));
  };

  return (
    <div className="flex gap-5 items-center">
      <span
        className={`hover:text-red-1 text-gray-500 cursor-pointer select-none ${
          isFirst && "pointer-events-none"
        }`}
        onClick={() => onPrev(curPage)}
      >
        Previous page
      </span>
      <span className="flex gap-2">{renderBtnNum()}</span>
      <span
        className={`hover:text-red-1 text-gray-500 cursor-pointer select-none ${
          isLast && "pointer-events-none"
        }`}
        onClick={() => onNext(curPage)}
      >
        Next page
      </span>
    </div>
  );
};

export default Pagination;
