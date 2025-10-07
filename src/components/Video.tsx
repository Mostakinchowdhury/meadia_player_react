import Controlll from "./Controlll";
import Downpart from "./Downpart";
import Uppart from "./Uppart";
import { useNavigate } from "react-router";
import Filecontext from "../context/Filescontext";
import { useContext, useRef, useState, useEffect } from "react";
import { Files } from "../filejson/Files";
import "../page/home.css";

const Video = () => {
  const [isplay, setisplay] = useState<boolean>(false);
  const [duration, setduration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const fid = useContext<string>(Filecontext);
  const adio = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  // useeffect part in here
  useEffect(() => {
    const audio = adio.current;

    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoaded = () => {
      setduration(audio.duration);
    };

    const handleEnded = () => {
      setisplay(false);
      navigate(`/gorge/${parseInt(fid) + 1}`);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [fid, navigate]);
  return (
    <div className="">
      <div className="h-[60px] -m-[15px] -mt-3 rounded-t-lg min-w-full justify-center items-center overflow-hidden pt-2 px-4">
        <Uppart
          download={Files.find((e) => e.id == parseInt(fid))?.name}
          sourse={Files.find((e) => e.id == parseInt(fid))?.path || ""}
        />
      </div>
      <div className="p-0">
        <div
          className={`mt-10  h-[220px] after:content-['']  flex justify-center items-center p-0 ${
            isplay ? "coniccon" : ""
          } relative`}
        >
          <video
            src={Files.find((e) => e.id == parseInt(fid))?.path}
            ref={adio}
            className="rounded-xl relative"
            onPlay={() => setisplay(true)}
            onPause={() => setisplay(false)}
          ></video>
          <button
            className="text-2xl text-[#FFE3D3] absolute bottom-4 cursor-pointer hover:text-blue-600 right-4 font-bold"
            title="Fullscreen"
            onClick={() => {
              if (adio.current) {
                if (!document.fullscreenElement) {
                  adio.current.requestFullscreen();
                } else {
                  document.exitFullscreen();
                }
              }
            }}
          >
            <i className="fa-solid fa-expand"></i>
          </button>
        </div>
      </div>
      <Controlll
        currentTime={currentTime}
        Auoref={adio}
        duration={duration}
        isplay={isplay}
        setisplay={setisplay}
        setcurrentime={setCurrentTime}
      />
      <Downpart
        value="bg-transparent  text-black font-extrabold text-3xl mb-2"
      />
    </div>
  );
};

export default Video;
