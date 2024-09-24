import { IPost } from "../../@types";
import React, { Suspense, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
const Card = React.lazy(() => import("../../components/Card/Card"));
import { BASE_IMG_URL } from "../../components/Card/Card";
import FullCard from "../../components/Card/FullCard";
import { Link, To, useSearchParams } from "react-router-dom";
import PageLoader from "../../components/loader/PageLoader";
import PaginationComp from "../../components/PaginationComp";
import "./home.scss";
import { banner_img } from "../../assets/img";
import { BANNER_LINK_URL } from "../../constants.ts";

export default function Home(): JSX.Element {
  const [searchParams] = useSearchParams();
  const current = Number(searchParams.get("page")) || 1; // Hozirgi sahifa

  // News (yangiliklar) API dan ma'lumot olish
  const {
    data: news,
    isFetching: newsLoading,
    error: newsError,
  } = useFetch(`/news?page=${current}`);

  // Banner API dan ma'lumot olish
  const { data: banner } = useFetch("/banner");

  // Top banner (asosiy banner) API dan ma'lumot olish
  const { data: bannerTop, isFetching: tbLoading } = useFetch("/topbanner");

  // Slayder uchun holat (currentIndex)
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Sahifa yangilanganda yuqoriga ko'tariladi
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [current]);

  // Bannerlarni har 3 sekundda avtomatik o'zgartirish uchun useEffect
  useEffect(() => {
    if (banner?.data?.length) {
      const interval = setInterval(() => {
        setCurrentBannerIndex((prevIndex) =>
          prevIndex === banner.data.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // 3 sekundda bir slayd o'zgaradi

      return () => clearInterval(interval); // Intervalni tozalash
    }
  }, [banner]);

  // Yuklanayotgan bo'lsa, sahifani yuklash komponentini ko'rsatish
  if (!news && newsLoading) return <PageLoader />;
  if (tbLoading) return <PageLoader />;
  if (newsError) return <div>...Error</div>;

  return (
    <div>
      {/* 1-sahifada Top Bannerni ko'rsatish */}
      {current === 1 &&
        (tbLoading ? (
          "loading..."
        ) : (
          <Suspense fallback={<PageLoader />}>
            <FullCard {...bannerTop?.data[0]?.news} />
          </Suspense>
        ))}

      <div className="container">
        {/* Statik banner */}
        <Link to={BANNER_LINK_URL}>
          <img
            src={banner_img}
            alt="banner"
            className="banner_img_top w-full mb-8 object-cover"
          />
        </Link>

        {/* Yangiliklar kartalari */}
        <div className="card_container_block flex justify-start pt-[2.2vw] xl:pt-[2rem] flex-wrap xs:gap-y-[8vw] gap-y-[4vw] xl:gap-y-[5rem] xl:-mx-4 md:-mx-2 lg:-mx-2">
          {news &&
            news?.news?.map((n: IPost) => (
              <Card key={n._id} {...n} />
            ))}
        </div>
      </div>

      {/* Sahifa bo'yicha pagination */}
      <div className="container flex justify-center py-[4vw] xl:py-[5rem]">
        <ul className="flex items-center justify-center gap-[0.4vw] text-black xs:text-[1.3rem] md:text-[1.5rem] lg:text-[1.2vw] xl:text-[2rem]">
          <PaginationComp current={current} news={news} />
        </ul>
      </div>

      {/* Banner rasmni to'g'ri URL bilan qo'shamiz va slayder qo'llaymiz */}
      {banner && banner.data && (
        <div className="container">
          <div className="banner-slider">
            {banner.data.map((bannerItem: { link: To; image: { name: string; }; }, index: number) => (
              <div
                key={index}
                className={`slide ${
                  index === currentBannerIndex ? "active" : ""
                }`}
                style={{
                  display: index === currentBannerIndex ? "block" : "none",
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <Link to={bannerItem.link}>
                  <img
                    src={`${BASE_IMG_URL}${bannerItem.image.name}`}
                    alt="banner"
                    className="banner_img w-full rounded-[1rem] mb-8 object-cover"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
