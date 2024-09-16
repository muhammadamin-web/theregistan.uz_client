import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
interface SearchProps {
  searchShow: boolean;
  setSearchShow: React.Dispatch<React.SetStateAction<boolean>>;
}
function SearchComponent({ searchShow, setSearchShow }: SearchProps) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchShow(false);
    setInputValue("");
    navigate(`/search?title=${inputValue}`);
  };
  return (
    <div
      style={{
        pointerEvents: searchShow ? "all" : "none",
        opacity: searchShow ? "1" : "0",
        // transform: !searchShow ? "translateY(-300px)" : "translateY(0px)",
      }}
      className={`-z-10 absolute left-0 top-full w-full overflow-hidden duration-200 delay-100`}
    >
      <div className='w-full bg-white border-t border-mainblack border-b'>
        <div className='container'>
          <form onSubmit={submitHandler} className='w-full flex items-center'>
            <input
              className='min-h-[87px] text-[#050505] text-[18px] outline-none w-full font-traver'
              autoFocus={true}
              maxLength={256}
              value={inputValue}
              name='query'
              placeholder='Поиск'
              type='text'
              id='search'
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button type='submit'></button>
            <span
              onClick={(e) => {
                e.preventDefault();
                setSearchShow(false);
                setInputValue("");
              }}
              className='w-[35px] h-[35px] flex items-center justify-center cursor-pointer'
            >
              <RxCross2 style={{ width: "100%", height: "100%" }} />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
