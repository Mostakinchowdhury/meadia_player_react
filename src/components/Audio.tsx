import Uppart from "./Uppart";
import Middlepart from "./Middlepart";
import { Files } from "../filejson/Files";
import Filecontext from "../context/Filescontext";
import { useContext } from "react";
const Audio = () => {
  const fid = useContext<string>(Filecontext);
  
  return (
    <div className="p-0">
      <Uppart
        download={Files.find((e) => e.id == parseInt(fid))?.name||""}
        sourse={Files.find((e) => e.id == parseInt(fid))?.path || ""}
      />
      <Middlepart/>
    </div>
  );
};

export default Audio;
