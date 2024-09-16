import { Link } from "react-router-dom";
import { LeftArrowImg } from "../../assets/img";
function LinkToHome() {
  return (
    <>
      <Link
        to={"/"}
        className="flex items-center gap-2 xs:pt-[4vw] xs:pb-[4vw] pt-[2vw] pb-[1vw]"
      >
        <img src={LeftArrowImg} alt="left" className="w-[3vw] xl:w-[2rem]" />
        <p className="xs:text-[3vw] md:text-[2.2vw] lg:text-[1.5vw] xl:text-[1.8rem] text-mainblack font-inter">
          НА ГЛАВНУЮ
        </p>
      </Link>
    </>
  );
}

export default LinkToHome;
