import { Link } from "react-router-dom";
import { ICat, IPost } from "../../@types";
import CategoryUI from "./components/CategoryUI";
import { motion } from "framer-motion";
import "./Card.scss";

import DateReadUI from "./components/DateReadUI";
// import dayjs from "dayjs";
// import "dayjs/locale/ru"; // Import the Russian locale

export const BASE_IMG_URL = "https://api.theregistan.uz/upload/";

export default function Card({
  title,
  category,
  readTime,
  image,
  date,
  reversed,
  isColored,
  bgColor,
  textColor,
  _id,
  customWidth,
}: IPost): JSX.Element {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`
         rounded-[1rem] text-mainblack group ${
           customWidth
             ? customWidth
             : "xs:w-full sm:w-full  md:w-[50%] lg:w-[calc((100%/3))] xl:w-[calc((100%/3))] xs:px-0 px-4 lg:px-2 md:px-2"
         }`}
    >
      <div
        style={{
          background: isColored ? bgColor : "",
          color: isColored ? textColor : "#131313",
        }}
        className={`${
          isColored && `px-4 pb-6 pt-4`
        } hover:-translate-y-2 rounded-[1rem] duration-200 flex flex-col h-full  ${
          reversed && "flex-col-reverse"
        }`}
      >
        <Link to={`/post/${_id}`}>
          <img
            src={`${BASE_IMG_URL + image?.name}`}
            className='card_img  w-full bg-black aspect-[5/3] object-cover'
            alt='image'
          />
        </Link>

        <div className='card_content pt-4 md:py-6'>
          {/* // Categories */}
          <div className='flex gap-2'>
            {category.map((c: ICat) => (
              <CategoryUI
                key={c._id}
                {...c}
                isColored={isColored}
                bgColor={bgColor}
                textColor={textColor}
              />
            ))}
          </div>
          <Link to={`/post/${_id}`}>
            <h1 className='card_title xs:text-[4.8vw] md:text-[2.3vw] lg:text-[26px]  xl:text-[1.] mt-[1vw] mb-[1.5vw] xl:mt-[1.5rem]  xl:mb-[2rem] group-hover:underline duration-150 line-clamp-3 decoration-2 underline-offset-[0.2em] decoration-maingreen font-bold'>
              {/* <h1 className='text-[] mt-[1cqw] mb-[1.5vw] xl:mb-[2rem] group-hover:underline duration-150 line-clamp-3 decoration-2 underline-offset-[0.2em] decoration-maingreen font-bold'> */}
              {title}
            </h1>
          </Link>
          <DateReadUI
            readTime={readTime}
            created={date}
            isColored={isColored}
            textColor={textColor}
          />
        </div>
      </div>
    </motion.div>
  );
}
