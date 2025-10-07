import image from "../assets/The Little Things Sitting on Floor.png";
import Controlll from "./Controlll";
import Downpart from "./Downpart";
import { useNavigate } from "react-router";
import Filecontext from "../context/Filescontext";
import { useContext, useRef, useState, useEffect } from "react";
import { Files } from "../filejson/Files";
import "../page/home.css";

const Middlepart = () => {
  const fid = useContext<string>(Filecontext);
  const adio = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const [isplay, setisplay] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const audio = adio.current;

    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoaded = () => {
      setDuration(audio.duration);
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
    <div className="bg-[#FFFFFF] absolute top-16 rounded-4xl right-[4px] left-[4px] bottom-[4px] flex flex-col items-center p-2 z-0">
      <div
        className={`mt-10  w-[220px] bg-[#FFE3D3] h-[220px] rounded-full after:content-[''] after:rounded-full flex justify-center items-center ${
          isplay ? "coniccon" : "bg-[#FFE3D3] after:inset-0"
        }`}
      >
        <img src={image} alt="img" className="max-w-[180px]" />
        <audio
          src={Files.find((e) => e.id == parseInt(fid))?.path}
          ref={adio}
        />
      </div>
      <Controlll
        currentTime={currentTime}
        Auoref={adio}
        duration={duration}
        isplay={isplay}
        setisplay={setisplay}
        setcurrentime={setCurrentTime}
      />
      <Downpart />
    </div>
  );
};

export default Middlepart;
