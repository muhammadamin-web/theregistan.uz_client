import { Link } from "react-router-dom";

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  const links = [
    { path: "/", name: "О ПРОЕКТЕ" },
    { path: "/", name: "РЕКЛАМОДАТЕЛЯМ" },
    { path: "https://www.instagram.com/theregistan/", name: "INSTAGRAM" },
    { path: "https://t.me/theregistan", name: "TELEGRAM-КАНАЛ" },
    { path: "https://www.facebook.com/theregistan", name: "FACEBOOK" },
  ];
  return (
    // <footer className='mt-auto border-t border-[#131313] xs:py-[4vw] py-[1.5vw] xl:py-[2rem] '>
    <footer className='mt-auto border-t border-[#131313] py-[22px] '>
      <div className='container lg:w-[85%]'>
        <nav className='flex xs:flex-col md:flex-col xs:items-center md:items-center text-[#131313] justify-center gap-[3vw] xl:gap-[1.7rem] '>
          {links.map((l, i) => {
            if (i == 0 || i == 1) {
              return (
                <Link
                  key={l.name}
                  className='hover:underline underline-offset-[0.4em] decoration-2 decoration-maingreen text-[14px] font-bold duration-150'
                  to={l.path}
                >
                  {l.name}
                </Link>
              );
            }
            return (
              <Link
                key={l.name}
                className='hover:underline underline-offset-[0.4em] decoration-2 decoration-maingreen text-[14px] font-bold duration-150'
                to={l.path}
                target='_blank'
              >
                {l.name}
              </Link>
            );
          })}
        </nav>

        {/* <p className='font-inter xs:px-[4vw] text-center m-auto xs:mt-[3vw] lg:mt-[1vw] xl:mt-[2rem] text-darkgrey mt-[1vw] xs:text-[1.6vw] md:text-[.8rem] xs:w-full max-w-[700px] text-[.75rem]'> */}
        <p className='font-inter xs:px-[4vw] text-center m-auto text-darkgrey mt-[12px] xs:text-[1.6vw] md:text-[.8rem] xs:w-full max-w-[700px] text-[.75rem]'>
          © 2020 - {year}. The Registan — Культура, креатив, маркетинг в
          Узбекистане.{" "}
          {/* <Link className='font-inter' to={"/"}>
            theregistan.uz
          </Link>{" "} */} <br />
          Использование материалов данного сайта разрешается с обязательным
          указанием активной  <br /> ссылки на сайт и названия сайта в виде «The
          Registan» или    theregistan.uz 
        
         
       
        </p>
      </div>
    </footer>
  );
}
