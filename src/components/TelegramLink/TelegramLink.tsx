import { Link } from "react-router-dom";
// import { PiTelegramLogoLight } from "react-icons/pi";
// import { BiLogoTelegram } from "react-icons/bi";

// import { BsArrowRight } from "react-icons/bs";
import { Tg2Img, TgRightImg } from "../../assets/img";
function TelegramLink() {
  return (
    <Link
      target='_blank'
      to={"https://t.me/theregistan"}
      className='bg-[#61A8DE] mt-6 flex items-center px-[2cqw] py-[1.1cqw] xs:p-[20px] gap-4 xs:gap-2 rounded-xl w-full xs:w-[110%] xs:-translate-x-[5%]'
    >
      <span className='xs:text-[6vw] '>
        {/* <span className='text-white flex text-[3rem] xs:text-[6vw] rounded-full p-4 xs:p-2'> */}
        {/* <PiTelegramLogoLight /> */}
        {/* <BiLogoTelegram /> */}
        <img
          className='w-[3cqw] xs:w-[6cqw] xl:w-[4rem]  '
          src={Tg2Img}
          alt=''
        />
      </span>
      {/* <div className='text-white hover:underline  underline-offset-8 '> */}
      <div className='text-white '>
        {/* <p className='text-[1.7rem] md:text-[1.2rem] lg:text-[1.2vw] xl:text-[1.5rem] xs:text-[3vw]'> */}
        <p className='text-[1.2cqw] xs:text-[2.6cqw] xl:text-[1.4rem]'>
          {/* Подписывайтесь */}
          Переходите на наш Telegram-канал,{" "}
          <span className='xs:hidden'>чтоб ничего не пропустить!</span>
        </p>
        {/* <p className='text-[2rem] md:text-[1.5rem] lg:text-[1.6vw] xl:text-[2.3rem] xs:text-[3.3vw]'> */}
        {/* <p className='text-[1.7cqw] xs:text-[2.2cqw] xl:text-[2rem] leading-[1.5]'> */}
        {/* <p className='hidden xs:block text-[1.7cqw] xs:text-[2.2cqw] xl:text-[2rem] leading-[1.5]'> */}
        <p className='hidden xs:block text-[1.2cqw] xs:text-[2.6cqw] xl:text-[1.4rem] leading-[1.5]'>
          {/* TheRegistan в Telegram. */}
          чтоб ничего не пропустить!
        </p>
      </div>
      <span className='text-white text-[3.8vw] ml-auto xl:text-[4rem]'>
        {/* <BsArrowRight /> */}
        <img
          className='w-[4cqw] xs:w-[7cqw] xl:w-[4rem]'
          src={TgRightImg}
          alt=''
        />
      </span>
    </Link>
  );
}

export default TelegramLink;
