import CategoryUI from "../../components/Card/components/CategoryUI";
import DateReadUI from "../../components/Card/components/DateReadUI";
import "./poststyle.css";
import "./index.scss";

import "swiper/css";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../hooks/useFetch";
import Card, { BASE_IMG_URL } from "../../components/Card/Card";

import PageLoader from "../../components/loader/PageLoader";
import { ICat, IPost } from "../../@types";
import { useEffect } from "react";
import { facebook, telegram, x, vk, copy_link } from "../../assets/img"; // Import rasmlar
import PostModal from "../../components/PostModal/PostModal.tsx";
import { Helmet } from "react-helmet";

export default function Post(): JSX.Element {
  const { id } = useParams();

  const { data: posts, isFetching: newsLoading2, error: newsError2 } = useFetch("/news");
  const { data: postSingle, isFetching: newsLoading, error: newsError } = useFetch(`/news/${id}`);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  if (!postSingle && newsLoading) return <PageLoader />;
  if (newsError) return <div>...Error</div>;
  if (!posts && newsLoading2) return <PageLoader />;
  if (newsError2) return <div>...Error</div>;

  const post = postSingle?.data;
  const filteredPosts = posts?.news.filter((p: IPost) => p._id !== id);
  const customWidth = `w-full h-full`;

  // Share URL'ini olish
  const shareUrl = window.location.href;

  // HTML teglardan toza matnni olish funksiyasi
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const strippedDescription = stripHtml(post?.content?.data || ""); // HTMLdan tozalangan description

  return (
    <>
      <Helmet>
        {/* Meta ma'lumotlar */}
        <meta name="description" content={strippedDescription} />
        <meta name="description" content={strippedDescription} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:type" content="article" />
        <meta property="image" content={BASE_IMG_URL + post?.image?.name} />
        <meta property="og:site_name" content="Eleksan.uz" />
        <title>{post?.title}</title>
      </Helmet>

      <div className='detail_container container flex flex-col'>
        <h1 className='detail_title text-center m-auto text-[5vw] my-[.4em] mb-[.7em] lg:text-[3.2vw] pt-5 lg:w-[75%] w-[90%] xs:w-full xl:text-[4.5rem] leading-[1.1em] underline duration-150 underline-offset-[0.4vw] font-bold decoration-maingreen'>
          {post?.title}
        </h1>

        <div className='flex gap-[1vw] text lg:w-[75%] w-[90%] xs:w-full'>
          <div className='flex gap-2'>
            {post?.category.map((c: ICat) => (
              <CategoryUI
                key={c._id}
                {...c}
                isColored={post.isColored}
                bgColor={post.bgColor}
                textColor={post.textColor}
              />
            ))}
          </div>
          <DateReadUI
            readTime={post.readTime}
            created={post.date}
            isColored={post.isColored}
            textColor={post.textColor}
          />
        </div>

        <img
          src={BASE_IMG_URL + post?.image?.name}
          className='post_img w-small post_banner rounded-[1rem] mt-[2vw] xl:mt-[3rem] xs:aspect-[5/3] aspect-[10/5]'
          alt='registan image'
        />

        <div className='text pt-5 lg:w-[75%] w-[90%] xs:w-full' dangerouslySetInnerHTML={{ __html: post?.content?.data }}></div>

        {/* Share tugmalarini qo'shish */}
        <div className='lg:w-[75%] w-[90%] mx-auto social_container'>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target='_blank'
            rel='noopener noreferrer'
            className='share-button facebook-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold'
          >
            <img className="facebook_image" src={facebook} alt="" />
          </a>

          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post?.title)}`}
            target='_blank'
            rel='noopener noreferrer'
            className='share-button facebook-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold'
          >
            <img className="telegram" src={telegram} alt="" />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post?.title)}`}
            target='_blank'
            rel='noopener noreferrer'
            className='share-button facebook-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold'
          >
            <img className="x" src={x} alt="" />
          </a>

          <a
            href={`https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post?.title)}`}
            target='_blank'
            rel='noopener noreferrer'
            className='share-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold'
          >
            <img className="vk-button" src={vk} alt="VK" />
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(shareUrl);
              alert('Link copied to clipboard!');
            }}
            className='share-button copy-link-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold'
          >
            <img className="copy_link" src={copy_link} alt="Copy Link" />
          </a>
        </div>
      </div>

      <div className='detail_container container flex flex-col'>
        <div className="lg:w-[75%] w-[100%] mx-auto">
          <PostModal />
        </div>
      </div>

      <section className='overflow-hidden'>
        <div className='container'>
          <Swiper
            className='my-10 flex'
            style={{ overflow: "visible" }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              1023: { slidesPerView: 3.1 },
              767: { slidesPerView: 2.2 },
              300: { slidesPerView: 1.3 },
            }}
          >
            {filteredPosts?.map((team: IPost) => (
              <SwiperSlide key={team._id} style={{ height: "auto" }}>
                <Card {...team} customWidth={customWidth} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
