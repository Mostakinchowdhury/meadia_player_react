import type { RefObject } from "react";
import { useContext } from "react";
import formatTime from "./formattime";
import "./range.css";
import Filecontext from "../context/Filescontext";
import { useNavigate } from "react-router";
import { Files } from "../filejson/Files";
type Props = {
  Auoref: RefObject<HTMLMediaElement | null>;
  parsestate?: (value: boolean) => void;
  currentTime: number;
  duration: number;
  setisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setcurrentime: React.Dispatch<React.SetStateAction<number>>;
  isplay: boolean;
};

const Controlll = ({
  Auoref,
  isplay,
  currentTime,
  duration,
  setisplay,
  setcurrentime,
}: Props) => {
  const fid = useContext<string>(Filecontext);
  const navigate = useNavigate();
  const file = Files.find((e) => e.id == parseInt(fid));
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-[#191D21] text-2xl font-bold mt-8 text-center">
        {file?.name.length && file.name.length > 50
          ? file.name.slice(0, 50) + "..."
          : file?.name || "Unknown"}
      </h3>

      <p className="text-[#656F77] text-sm font-medium">Inner Peace</p>
      <div className="flex items-center gap-5 text-2xl text-[#ACB8C2] mt-5">
        <i
          className="fa-solid fa-square-caret-left hover:text-blue-700 cursor-pointer"
          onClick={() => {
            setisplay(false);
            navigate(`/gorge/${parseInt(fid) - 1}`);
          }}
        ></i>
        <i
          className="fa-solid fa-backward hover:text-blue-700 cursor-pointer"
          onClick={() => {
            setcurrentime((pre) => pre - 10);
            if (Auoref?.current) {
              Auoref.current.currentTime = Math.max(
                0,
                Auoref.current.currentTime - 10
              );
            }
          }}
        ></i>
        <div className="w-[80px] h-[80px] bg-[#FFE3D3] flex justify-center items-center text-3xl text-white rounded-full">
          <i
            className={`fa-solid  hover:text-blue-700 cursor-pointer ${
              isplay ? "fa-pause" : "fa-play"
            }`}
            onClick={() => {
              if (Auoref?.current) {
                if (Auoref.current.paused) {
                  Auoref.current.play();
                  setisplay(true);
                } else {
                  Auoref.current.pause();
                  setisplay(false);
                }
              }
            }}
          ></i>
        </div>
        <i
          className="fa-solid fa-forward hover:text-blue-700 cursor-pointer"
          onClick={() => {
            setcurrentime((pre) => pre + 10);
            if (Auoref?.current) {
              Auoref.current.currentTime = Math.min(
                Auoref.current.duration,
                Auoref.current.currentTime + 10
              );
            }
          }}
        ></i>
        <i
          className="fa-solid fa-square-caret-right hover:text-blue-700 cursor-pointer"
          onClick={() => {
            setisplay(false);
            navigate(`/gorge/${parseInt(fid) + 1}`);
          }}
        ></i>
      </div>
      <div className="mt-4 flex items-center gap-2 bg-ambe-400 w-full">
        <p className="font-medium text-xs text-[#656F77]">
          {formatTime(currentTime)}
        </p>
        <input
          type="range"
          min={0}
          max={100}
          value={
            isNaN((currentTime / duration) * 100)
              ? 0
              : (currentTime / duration) * 100
          }
          onChange={(e) => {
            setcurrentime((parseInt(e.target.value) / 100) * duration);
            if (Auoref?.current) {
              Auoref.current.currentTime =
                (parseInt(e.target.value) / 100) * duration;
            }
            if (Auoref.current?.paused) {
              Auoref.current.play();
              setisplay(true);
            }
          }}
          className="grow w-[220px]"
          style={
            {
              "--percent": `${
                isNaN((currentTime / duration) * 100)
                  ? 0
                  : (currentTime / duration) * 100
              }%`,
            } as React.CSSProperties
          }
        />
        <p className="font-medium text-xs text-[#656F77]">
          {formatTime(duration)}
        </p>
      </div>
    </div>
  );
};

export default Controlll;
