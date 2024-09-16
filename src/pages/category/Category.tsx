import { useParams, useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";
import { IPost } from "../../@types";
// import { LeftArrowImg } from "../../assets/img";
import PageLoader from "../../components/loader/PageLoader";
import PaginationComp from "../../components/PaginationComp";
import { useEffect } from "react";

function Category() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const current = Number(searchParams.get("page")) || 1;
  const {
    data: news,
    isFetching: newsLoading,
    error: newsError,
  } = useFetch(`/news?category=${id}&page=${current}`);

  const { data: category } = useFetch(`/category/${id}`);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);
  if (!news && newsLoading) return <PageLoader />;
  if (newsError) return <div>...Error</div>;

  return (
    <div>
      <div className="container flex flex-col">
        {/* <Link
          to={"/"}
          className='flex items-center gap-2 xs:pt-[4vw] xs:pb-[4vw] pt-[2vw] pb-[1vw] mr-auto'
        >
          <img
            src={LeftArrowImg}
            alt='left'
            className='w-[2vw] xl:w-[2rem] object-cover'
          />
          <p className='xs:text-[3vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[1.8rem] text-mainblack font-inter'>
            НА ГЛАВНУЮ
          </p>
        </Link> */}
      </div>
      <h1 className="text-center text-[1.2cqi] xs:text-[4.5cqi] py-[1.3vw] xl:py-[2rem] uppercase font-semibold">
        {category?.data?.name}
      </h1>
      <div className="container">
        <div className=" flex justify-start flex-wrap  xs:gap-y-[8vw] gap-y-[4vw] xl:gap-y-[5rem]  xl:-mx-4 md:-mx-2 lg:-mx-2">
          {news && news?.news?.map((n: IPost) => <Card key={n._id} {...n} />)}
        </div>
      </div>
      <div className="container flex justify-center py-[3vw] xl:py-[3rem]">
        <ul className="flex items-center justify-center gap-[0.4vw] text-black xs:text-[1.3rem] md:text-[1.5rem] lg:text-[1.2vw] xl:text-[2rem]">
          <PaginationComp current={current} news={news} />
        </ul>
      </div>
    </div>
  );
}

export default Category;
