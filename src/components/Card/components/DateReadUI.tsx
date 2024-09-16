import dayjs from "dayjs";
import { FaRegClock } from "react-icons/fa";
import ru from "dayjs/locale/ru";
import "./DateReadUI.scss";
dayjs.locale(ru);

interface IDR {
  created: string;
  readTime: number;
  isColored: boolean;
  textColor: string;
}

export function DateReadUI({ created, readTime, isColored, textColor }: IDR) {
  // Set the locale to Russian

  // Format the date using Day.js
  const formattedDateString = dayjs(created).format("D MMMM YYYY года");

  return (
    <div
      // className='flex gap-[1em] xs:text-[1.6vw] md:text-[1vw] lg:text-[0.5vw] xl:text-[0.8rem]  items-center'
      className="card_date flex gap-[1em] text-[12px]  items-center"
      style={{
        color: isColored ? textColor : "#898989",
      }}
    >
      <p className="date_created font-inter">{formattedDateString}</p>

      {readTime && (
        <div className=" flex gap-[0.3vw] xs:gap-[1cqi] items-center">
          <FaRegClock className="w-[1em] h-[1em]" />
          <p className="font-inter">{readTime} мин</p>
        </div>
      )}
    </div>
  );
}

export default DateReadUI;
