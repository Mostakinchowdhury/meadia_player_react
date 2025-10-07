import { useContext, useRef } from "react";
import Uppart from "./Uppart";
import Downpart from "./Downpart";
import { Files } from "../filejson/Files";
import Filecontext from "../context/Filescontext";
import { useNavigate } from "react-router";

const Fimg = () => {
  const fid = useContext<string>(Filecontext);
  const img = useRef<HTMLImageElement | null>(null);
  const navigate = useNavigate();
  const handleimage = () => {
    if (!document.fullscreenElement) {
      img.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  const handlenext = () => {
    navigate(`/gorge/${parseInt(fid) + 1}`);
  };
  const handlepre = () => {
    navigate(`/gorge/${parseInt(fid) - 1}`);
  };
  return (
    <div className="flex flex-col justify-between">
      <div className="h-[60px] -m-[15px] -mt-3 rounded-t-lg min-w-full  justify-center items-center overflow-hidden pt-2 px-4">
        <Uppart
          sourse={Files.find((e) => e.id == parseInt(fid))?.path || ""}
          download={Files.find((e) => e.id == parseInt(fid))?.name}
        />
      </div>
      <div>
        <div className="flex justify-between gap-2 items-center mt-30 -mx-3 p-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-900 bg-black"
            onClick={handlepre}
          >
            <i className="fa-solid fa-square-caret-left  text-white text-2xl"></i>
          </div>

          <img
            src={Files.find((e) => e.id == parseInt(fid))?.path}
            className="h-[300px] text-white text-2xl object-cover grow-1 cursor-pointer object-center max-w-[265px]"
            onClick={handleimage}
            alt="img"
            ref={img}
          />
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center bg-black cursor-pointer hover:bg-purple-900 "
            onClick={handlenext}
          >
            <i
              className="fa-solid fa-square-caret-right text-white text-2xl"
              title="next"
            ></i>
          </div>
        </div>
      </div>
      <div className="overflow-hidden px-6 -ml-10 w-10/12">
        <Downpart />
      </div>
    </div>
  );
};

export default Fimg;
