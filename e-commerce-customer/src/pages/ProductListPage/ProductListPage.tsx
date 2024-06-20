import { useState } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { mockData } from "../../layouts/HomePageLayout/data";

export interface PaginationState {
  curPage: number;
  start: number;
  end: number;
}

const ProductListPage = () => {
  const totalPages = 22;
  const numOfPages = 7;

  const [pagination, setPagination] = useState<PaginationState>({
    curPage: 1,
    start: 1,
    end: numOfPages,
  });

  const onCurPage = (page: number) => {
    setPagination({ ...pagination, curPage: page });
  };

  const onPrev = (page: number) => {
    const paginationInfo: PaginationState = {
      ...pagination,
    };

    if (paginationInfo.curPage <= 1) return;
    if (paginationInfo.curPage === paginationInfo.start) {
      paginationInfo.start = pagination.start - 4;
      paginationInfo.end = pagination.end - 4;
    }

    paginationInfo.curPage = page - 1;

    setPagination(paginationInfo);
  };

  const onNext = (page: number) => {
    const paginationInfo: PaginationState = {
      ...pagination,
    };

    if (paginationInfo.curPage >= totalPages) return;
    if (paginationInfo.curPage === paginationInfo.end) {
      paginationInfo.start = pagination.start + 4;
      paginationInfo.end = pagination.end + 4;
    }

    paginationInfo.curPage = page + 1;

    setPagination(paginationInfo);
  };

  return (
    <div className="pb-52">
      <span className="flex gap-2 text-slate-400">
        <span>Home</span>
        <span className="text-black">/</span>
        <span className="text-black">Products</span>
      </span>
      <p className="font-bold text-2xl mt-12 mb-9">Our products</p>
      <div className="grid grid-cols-4 gap-4">
        {mockData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.attachment[0]}
            sales={item.sales}
            name={item.name}
            price={item.price}
            rating={item.rating}
            totalReviews={item.totalReviews}
          />
        ))}
      </div>
      <div className="w-full flex justify-center mt-8 items-center">
        <Pagination
          totalPages={totalPages}
          start={pagination.start}
          end={pagination.end}
          curPage={pagination.curPage}
          isFirst={false}
          isLast={false}
          onPrev={onPrev}
          onCurPage={onCurPage}
          onNext={onNext}
        />
      </div>
    </div>
  );
};

export default ProductListPage;
