import { Pagination } from "antd";
import { RightArrow2 } from "../assets/img";
import { useNavigate, useSearchParams } from "react-router-dom";

interface PaginationCompProps {
  current: number;
  news: {
    allFindedPosts: number;
    pages: number;
  };
}

function PaginationComp({ current, news }: PaginationCompProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const onChange = (page: number) => {
    let link = `?page=${page}`;
    if (title) {
      link = link + "&title=" + title;
    }
    navigate(link);
  };
  return (
    <Pagination
      current={current}
      defaultPageSize={12}
      onChange={(page) => onChange(page)}
      total={news.allFindedPosts}
      hideOnSinglePage
      itemRender={(page, type, originalElement) => {
        if (type === "prev") {
          return (
            <img
              className="rotate-180  absolute w-[50%] h-[50%] top-[25%] left-[25%]  "
              style={{ opacity: current == 1 ? 0.4 : 1 }}
              src={RightArrow2}
              alt="left"
            />
          );
        }
        if (type === "next") {
          return (
            <img
              className="absolute w-[50%] h-[50%] top-[25%] left-[25%] "
              style={{ opacity: current == news.pages ? 0.4 : 1 }}
              src={RightArrow2}
              alt="right"
            />
          );
        }

        if (type === "page") {
          return (
            <span
              key={page}
              className={`active:underline text-bold text-[20px] ${
                page === current && "font-bold underline"
              } hover:font-bold hover:underline underline-offset-[0.5vw] decoration-2 decoration-maingreen duration-150 p-1 cursor-pointer`}
            >
              {page}
            </span>
          );
        }
        return originalElement;
      }}
    />
  );
}

export default PaginationComp;
