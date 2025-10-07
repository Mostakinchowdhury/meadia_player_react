import { useContext, useEffect, useState } from "react";
import { favsetter, Files } from "../filejson/Files";
import Filecontext from "../context/Filescontext";
import { Link } from "react-router";
type Props = {
  value?: string;
};
const Downpart = ({ value }: Props) => {
  const fid = useContext<string>(Filecontext);
  const [isclicked, setisclicked] = useState<boolean>(false);
  useEffect(() => {
    if (Files[parseInt(fid) - 1].isfavorite) {
      setisclicked(true);
    }
  }, [fid]);
  useEffect(() => {
    favsetter(parseInt(fid), isclicked);
  }, [fid, isclicked]);
  const handleclick = () => {
    setisclicked((pre) => !pre);
  };
  return (
    <div
      className={`text-2xl text-[#ACB8C2]  absolute bg-[#FFE3D3] h-[60px] w-full bottom-0 flex justify-between px-20 items-center rounded-t-3xl ${
        value ? value : ""
      }`}
    >
      <button
        className="cursor-pointer hover:text-blue-700"
        onClick={handleclick}
      >
        <i
          className={`fa-solid fa-heart ${isclicked ? "text-green-600" : ""}`}
        ></i>
      </button>
      <Link to={"/list/all"} className={`cursor-pointer hover:text-blue-700`}>
        <i className={`fa-solid fa-list`}></i>
      </Link>
    </div>
  );
};

export default Downpart;
