import { LogoImg, SearchImg } from "../assets/img";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Search from "./searchComponent/SearchComponent";
import { ICat } from "../@types";

export default function Header() {
  const [show, setShow] = useState("0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchShow, setSearchShow] = useState(false);
  const [menuShow, setMenuShow] = useState(true);

  interface Imenu {
    OrderNumber: string;
    category: ICat;
    link: string;
    _id: string;
  }
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 150) {
        if (window.scrollY > lastScrollY) {
          setShow("-100");
        } else {
          setShow("0");
        }
      } else {
        setShow("0");
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const {
    data: menus,
    isFetching: newsLoading,
    error: newsError,
  } = useFetch("/menu");

  if (!menus && newsLoading) return <div></div>;
  if (newsError) return <div>...Error</div>;

  return (
    <>
      {" "}
      <header
        style={{ transform: `translate3d(0px,${show}%,0px)` }}
        className={`duration-300 xs:py-4 py-[20px] flex flex-col gap-5  ease-linear border-b border-mainblack sticky top-0 w-full bg-white z-10`}
      >
        <div className="container flex justify-between lg:justify-center items-center">
          <Link to={"/"}>
            <img
              src={LogoImg}
              alt="logo TheRegistan"
              className="w-[137px] h-[26px] lg:w-[230px] lg:h-[42px] "
              onClick={() => {
                setMenuShow(true);
              }}
            />
          </Link>
          <div className="lg:hidden flex gap-[4vw]">
            <button
              onClick={() => {
                setSearchShow(true);
                setMenuShow(true);
              }}
            >
              <img
                src={SearchImg}
                alt="search"
                className="xs:w-[5vw] xs:h-[5vw]"
              />
            </button>
            <button
              onClick={() => {
                setMenuShow(!menuShow);
                setSearchShow(false);
              }}
            >
              <RxHamburgerMenu className=" xs:w-[7vw] xs:h-[7vw] text-[3rem]" />
            </button>
          </div>
          <nav
            style={{ transform: `translateY(${menuShow ? "-200" : "0"}%)` }}
            className="flex lg:hidden text-[#131313] flex-col items-center absolute top-[101%] left-0 w-full h-screen bg-white  border-black duration-500 -z-10"
          >
            {menus.data.map((l: Imenu) => (
              <NavLink
                onClick={() => {
                  setMenuShow(true);
                }}
                key={l.category.name}
                className="hover:underline underline-offset-[0.4em] decoration-2 decoration-maingreen text-[14px] py-[.8rem] font-bold duration-150 uppercase border-b border-black w-full text-center "
                to={"/category/" + l.category._id}
              >
                {l.category.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex justify-between container">
          <div></div>
          <nav className="flex mb-42 text-[#131313]  justify-center gap-[34px]">
            {menus.data.map((l: Imenu) => (
              <NavLink
                key={l.category.name}
                className="hover:underline underline-offset-[0.4em] decoration-2 decoration-maingreen text-[14px] font-bold duration-150 uppercase"
                to={"/category/" + l.category._id}
              >
                {l.category.name}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={() => {
              setSearchShow(true);
            }}
          >
            <img src={SearchImg} alt="search" />
          </button>
        </div>
        <Search setSearchShow={setSearchShow} searchShow={searchShow} />
      </header>
      {searchShow && (
        <div className="fixed inset-0 z-[2] bg-[rgba(217,217,217,.3)] backdrop-blur-xl"></div>
      )}
    </>
  );
}
