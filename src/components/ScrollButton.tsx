import { useEffect, useState } from "react";
import { TopImg } from "../assets/img";

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 150) {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <button
      onClick={scrollToTop}
      className='fixed w-[74px] h-[74px] p-3 right-[5%] bottom-[5%] z-10 cursor-pointer'
    >
      <img
        src={TopImg}
        alt=''
        className='bg-white rounded-full p-3'
        style={{ display: show ? "inline" : "none" }}
      />
    </button>
  );
};

export default ScrollButton;
