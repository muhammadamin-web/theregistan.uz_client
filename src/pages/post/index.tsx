import CategoryUI from "../../components/Card/components/CategoryUI";
import DateReadUI from "../../components/Card/components/DateReadUI";
import "./poststyle.css";
import "./index.scss";

import "swiper/css";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../hooks/useFetch";
import Card, { BASE_IMG_URL } from "../../components/Card/Card";
// import PageLoader from "../../components/loader/PageLoader";
import { ICat, IPost } from "../../@types";
import { useEffect } from 'react';
import { facebook, telegram, x, vk, copy_link } from "../../assets/img"; // Import images
import PostModal from "../../components/PostModal/PostModal.tsx";
import { Helmet } from "react-helmet";

export default function Post(): JSX.Element {
  const { id } = useParams();

  // Barcha hook-lar komponent boshida chaqiriladi
  const { data: posts,   } = useFetch("/news");
  const { data: postSingle, } = useFetch(`/news/${id}`);
  // const { data: posts, isFetching: newsLoading2, error: newsError2 } = useFetch("/news");
  // const { data: postSingle, isFetching: newsLoading, error: newsError } = useFetch(`/news/${id}`);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [id]);

  // **Hook-lardan keyin** shartli `return` operatorlarini qo'shing
  // if (!postSingle && newsLoading) return <PageLoader />;
  // if (newsError) return <div>...Error</div>;
  // if (!posts && newsLoading2) return <PageLoader />;
  // if (newsError2) return <div>...Error</div>;

  // Ma'lumotlar yuklangandan keyin `post` o'zgaruvchisini olamiz
  const post = postSingle?.data;
  const filteredPosts = posts?.news.filter((p: IPost) => p._id !== id);
  const customWidth = `w-full h-full`;

  // Share URL ni olish
  const shareUrl = window.location.href;

  // HTML teglarini olib tashlash funksiyalari
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const stripPreTags = (html: string) => {
    return html.replace(/<pre.*?>.*?<\/pre>/gs, '');
  };

  // `post` mavjudligini tekshirib, o'zgaruvchilarni hisoblaymiz
  const cleanedContent = post ? stripHtml(stripPreTags(post.content.data || "")) : "";
  const cleanContent = post
    ? post.content.data.replace(/<pre.*?>(.*?)<\/pre>/gs, (_match: any, p1: any) => {
      return `${p1.replace(/&lt;/g, '<').replace(/&gt;/g, '>')}`;
    })
    : "";

  // `useEffect` ichida `cleanContent` mavjudligini tekshiramiz
  useEffect(() => {
    // if (!cleanContent) return; // Agar `cleanContent` mavjud bo'lmasa, hech narsa qilmaymiz

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cleanContent; // HTML kodini div ichiga kiritish
    const scripts = tempDiv.querySelectorAll("script");

    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.innerHTML = oldScript.innerHTML;
      }
      newScript.async = true;
      document.body.appendChild(newScript);
    });
  }, [cleanContent]); // `cleanContent` o'zgarganda skriptlarni qayta yuklash

  return (
    <>
      <Helmet>
        {/* Meta tags */}
        <meta name="description" content={cleanedContent} />
        <meta name="og:description" content={cleanedContent} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:type" content="article" />
        <meta property="image" content={BASE_IMG_URL + post?.image?.name} />
        <meta property="og:image" content={BASE_IMG_URL + post?.image?.name} />
        <meta property="og:site_name" content="Theregistan.uz" />
        <meta property="og:url" content={shareUrl} />
        <meta name="google-site-verification" content="kaKWXno2UO4yhbErs-U_1X5eLvGEYcvjIA8vtlqjGMc" />
        <title>{post?.title}</title>
      </Helmet>

      <div className="detail_container container flex flex-col">
        <h1 className="detail_title text-center m-auto text-[5vw] my-[.4em] mb-[.7em] lg:text-[2.6vw] pt-5 lg:w-[75%] w-[90%] xs:w-full xl:text-[4rem] leading-[1.1em] underline duration-150 underline-offset-[0.4vw] font-bold decoration-maingreen">
          {post?.title} 
        </h1>

        <div className="flex gap-[1vw] text lg:w-[75%] w-[90%] xs:w-full">
          <div className="flex gap-2">
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
          {post && post.readTime && (
  <DateReadUI
    readTime={post.readTime}
    created={post.date}
    isColored={post.isColored}
    textColor={post.textColor}
  />
)}


        </div>

        <img
          src={BASE_IMG_URL + post?.image?.name}
          className="post_img w-small post_banner rounded-[1rem] mt-[2vw] xl:mt-[3rem] xs:aspect-[5/3] aspect-[10/5]"
          alt="registan image"
        />

        <div
          className="text pt-5 lg:w-[75%] w-[90%] xs:w-full"
          dangerouslySetInnerHTML={{ __html: cleanContent || 'Tavsif topilmadi' }} // HTMLni to'g'ridan-to'g'ri chiqarish
        />

        {/* Share buttons */}
        <div className="lg:w-[75%] w-[90%] mx-auto social_container">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-button facebook-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold"
          >
            <img className="facebook_image" src={facebook} alt="" />
          </a>

          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(
              post?.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-button facebook-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold"
          >
            <img className="telegram" src={telegram} alt="" />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(
              post?.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-button facebook-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold"
          >
            <img className="x" src={x} alt="" />
          </a>

          <a
            href={`https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(
              post?.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold"
          >
            <img className="vk-button" src={vk} alt="VK" />
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(shareUrl);
              alert("Link copied to clipboard!");
            }}
            className="share-button copy-link-button px-4 py-2 rounded bg-[#E5E5E5] text-white font-bold"
          >
            <img className="copy_link" src={copy_link} alt="Copy Link" />
          </a>
        </div>
      </div>

      <div className="detail_container container flex flex-col">
        <div className="lg:w-[75%] w-[100%] mx-auto">
          <PostModal />
        </div>
      </div>

      <section className="overflow-hidden">
        <div className="container">
          <Swiper
            className="my-10 flex"
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
