import img from "../../assets/img/mainLogo.png";

function PageLoader() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-white z-10">
        <div className="max-w-[15%] xs:max-w-[40%] animate-pulse">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default PageLoader;
