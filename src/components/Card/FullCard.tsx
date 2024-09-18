import { Link } from "react-router-dom";
import { ICat, IPost } from "../../@types";
import CategoryUI from "./components/CategoryUI";
import { BASE_IMG_URL } from "./Card";
import "./Card.scss";
import "./FullCard.scss";

export default function FullCard({
  _id,
  image,
  title,
  category,
}: IPost): JSX.Element {
  return (
    <div className='container md:py-[22px] py-[44px] flex flex-col gap-[1vw]'>


      <Link
        className='text-mainblack xs:order-1 group gap-6 xs:gap-4 duration-150 flex xs:flex-col flex-col-reverse '
        to={`post/${_id}`}
      >
        <img
          src={BASE_IMG_URL + image.name}
          className='fullcard_img w-full  xs:aspect-[14/9] aspect-[3/1] object-cover'
          alt='registan image'
        />

      </Link>
      <div className='flex xs:order-2 xs:mt-3 xs:mb-1 justify-between xs:flex-col sm:flex-col gap-4 text-mainblack'>
        <div className='flex gap-2'>
          {category.map((c: ICat) => (
            <CategoryUI key={c._id} {...c} />
          ))}
        </div>
      </div>
      <Link
        className='text-mainblack xs:order-3 group gap-6 xs:gap-4 duration-150 flex xs:flex-col flex-col-reverse '
        to={`post/${_id}`}
      >
        <div className='flex justify-between items-end gap-10 md:flex-col'>
          <h1 className='card_title_banner text-[5vw] md:text-[4vw] lg:text-[2.8vw] lg:max-w-[70vw] xl:text-[4.2rem]  leading-[1.1em] group-hover:underline xs:decoration-2 decoration-4 duration-150 underline-offset-[0.4vw] font-bold decoration-maingreen'>
            {title}
          </h1>
          <div className='hidden lg:flex text-[0.8vw] xl:text-[14px] rounded-full duration-150 group-hover:bg-maingreen group-hover:border-none  border border-mainblack p-[15px] w-[6em] h-[6em] xl:w-[84px] xl:h-[84px] items-center justify-center font-bold'>
            ЧИТАТЬ
          </div>
        </div>
      </Link>
    </div>
  );
}
