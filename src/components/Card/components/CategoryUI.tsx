import { Link } from "react-router-dom";
import "./CategoryUI.scss";

interface ICatUI {
  name: string;
  _id: string;
  isColored?: boolean;
  bgColor?: string;
  textColor?: string;
}
const capitalizeFirstLetter = (str: string) => {
  return str?.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export function CategoryUI({
  name,
  _id,
  isColored = false,
  bgColor,
  textColor,
}: ICatUI) {
  return (
    <Link
      key={_id}
      style={{
        background: isColored ? bgColor : "",
        color: isColored ? textColor : "#131313",
      }}
      // className='bg-maingreen  py-[0.2em] px-[0.5em] xs:text-[2.6vw] md:text-[1.2vw] lg:text-[0.6vw] xl:text-[.8rem] font-inter rounded-md flex items-center'
      className='card_tag bg-maingreen  py-[0.2em] px-[0.5em] text-[14px] xl:text-[12px] font-inter rounded-md flex items-center'
      to={`/category/${_id}`}
    >
      {capitalizeFirstLetter(name)}
    </Link>
  );
}

export default CategoryUI;
