import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import PageLoader from "../../components/loader/PageLoader";
import "./about.scss";
function About() {
  const { data, isFetching } = useFetch("/page");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  if (!data && isFetching) return <PageLoader />;
  return (
    <div>
      <div className="container">
        <div
          className="about-text pt-5 lg:w-[75%] w-[90%] xs:w-full"
          dangerouslySetInnerHTML={{
            __html: data.filter((s: any) => s.name === "about")[0]?.content
              ?.data,
          }}
        ></div>
      </div>
    </div>
  );
}

export default About;
