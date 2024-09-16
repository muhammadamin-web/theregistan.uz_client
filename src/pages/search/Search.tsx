import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PageLoader from "../../components/loader/PageLoader";
import { IPost } from "../../@types";
import Card from "../../components/Card/Card";
import PaginationComp from "../../components/PaginationComp";

function Search() {
  const [searchParams] = useSearchParams();
  const current = Number(searchParams.get("page")) || 1;
  const title = searchParams.get("title") || "";

  const {
    data: news,
    isFetching: newsLoading,
    error: newsError,
  } = useFetch(`/news?page=${current}&title=${title}`);

  if (!news && newsLoading) return <PageLoader />;
  if (newsError) return <div>...Error</div>;

  return (
    <>
      <div className='container'>
        <h1 className='my-[40px] xs:my-[30px] text-[#050505] font-bold text-[32px] xs:text-[22px]'>
          РЕЗУЛЬТАТЫ ПОИСКА
        </h1>
        <div className=' flex justify-start 14 pt-[2.2vw] xl:pt-[2rem] flex-wrap  xs:gap-y-[8vw] gap-y-[4vw] xl:gap-y-[5rem]  xl:-mx-4 md:-mx-2 lg:-mx-2'>
          {news && news.news.map((n: IPost) => <Card key={n._id} {...n} />)}
        </div>
        <div className='container flex justify-center py-[4vw]'>
          <PaginationComp current={current} news={news} />
        </div>
        {news.allFindedPosts == 0 && (
          <div className='h-[50vh]'>
            <span className='text-[18px]'>
              По данному запросу ничего не найдено
            </span>
            <div className='flex gap-4 my-[16px]'>
              <button className='py-[12px] px-[20px] border border-black rounded-full text-[12px]'>
                НОВЫЙ ПОИСК
              </button>
              <Link
                to={"/"}
                className='py-[12px] px-[20px] text-[12px] bg-[#ff4f27] text-white rounded-full'
              >
                НА ГЛАВНУЮ
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
