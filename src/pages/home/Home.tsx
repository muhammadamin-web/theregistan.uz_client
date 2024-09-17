import { IPost } from "../../@types";
import React, { Suspense, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
const Card = React.lazy(() => import("../../components/Card/Card"));
import { BASE_IMG_URL } from "./../../components/Card/Card";
import FullCard from "../../components/Card/FullCard";
import { Link, useSearchParams } from "react-router-dom";
import PageLoader from "../../components/loader/PageLoader";
import PaginationComp from "../../components/PaginationComp";
import "./home.scss";
import { banner_img } from "../../assets/img";
import { BANNER_LINK_URL } from "../../constants.ts"; // constants faylini import qilamiz
import Modal from "../../components/Modal/Modal.tsx";


export default function Home(): JSX.Element {
  const [searchParams] = useSearchParams();
  const current = Number(searchParams.get("page")) || 1;

  const {
    data: news,
    isFetching: newsLoading,
    error: newsError,
  } = useFetch(`/news?page=${current}`);

  const { data: banner } = useFetch("/banner");

  const { data: bannerTop, isFetching: tbLoading } = useFetch("/topbanner");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [current]);
  if (!news && newsLoading) return <PageLoader />;
  if (tbLoading) return <PageLoader />;
  if (newsError) return <div>...Error</div>;

  return (
    <div>
      {current == 1 &&
        (tbLoading ? (
          "loading..."
        ) : (
          <Suspense fallback={<PageLoader />}>
            <FullCard {...bannerTop?.data[0]?.news} />
          </Suspense>
        ))}
      {/* {tbLoading ? (
        "loading..."
      ) : (
        <Suspense fallback={<PageLoader />}>
          <FullCard {...bannerTop?.data[0]?.news} />
        </Suspense>
      )} */}
      <div className='container'>
     
      <Link to={BANNER_LINK_URL}>
      <img
        src={banner_img}
        alt='banner'
        className='banner_img_top w-full rounded-[1rem] mb-8 object-cover'
      />
    </Link>
        
        <div className='card_container_block flex justify-start 14 pt-[2.2vw] xl:pt-[2rem] flex-wrap  xs:gap-y-[8vw] gap-y-[4vw] xl:gap-y-[5rem]  xl:-mx-4 md:-mx-2 lg:-mx-2'>
          {news && news?.news?.map((n: IPost) => <Card key={n._id} {...n} />)}
        </div>
      </div>

      <div className='container flex justify-center py-[4vw] xl:py-[5rem]'>
        <ul className='flex items-center justify-center gap-[0.4vw] text-black xs:text-[1.3rem] md:text-[1.5rem] lg:text-[1.2vw] xl:text-[2rem]'>
          <PaginationComp current={current} news={news} />
        </ul>
      </div>

      {banner && banner?.data[0].status === true && (
        <div className='container'>
          <Link to={banner?.data[0]?.link}>
            <img
              src={`${BASE_IMG_URL + banner?.data[0]?.image?.name}`}
              alt='banner'
              className='banner_img w-full rounded-[1rem] mb-8 object-cover'
            />
          </Link>
        </div>
      )}
      {/* <Modal/> */}
    </div>

  );
}
