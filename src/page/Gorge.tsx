import { useNavigate, useParams } from "react-router";
import Audio from "../components/Audio";
import { Files } from "../filejson/Files";
import Video from "../components/Video";
import Fimg from "../components/Fimg";
import Hero from "../components/Hero";
import Filecontext from "../context/Filescontext";
import { useEffect } from "react";

const Gorge = () => {
  type media = {
    id: number;
    name: string;
    type: string;
    path: string;
    thumnail: string;
  };
  const { id } = useParams<string>();
  const navigate = useNavigate();
  let idNum = parseInt(id || "1");
  if (isNaN(idNum)) idNum = 1;

  useEffect(() => {
    const maxId = Math.max(...Files.map((e) => e.id));
    const minId = Math.min(...Files.map((e) => e.id));

    if (idNum > maxId || idNum < minId) {
      navigate(`/gorge/${minId}`, { replace: true });
    }
  }, [idNum, navigate]);

  const json: media | undefined = Files.find((e) => e.id === idNum);
  return (
    <Filecontext.Provider value={idNum.toString() ? idNum.toString() : "1"}>
      <div
        className={`relative h-[650px] rounded-2xl w-[400px] backdrop-blur-2xl z-50 conic p-4 overflow-hidden`}
      >
        <Hero />
        {json?.type === "audio" ? (
          <Audio />
        ) : json?.type === "video" ? (
          <Video />
        ) : json?.type === "img" ? (
          <Fimg />
        ) : (
          <p>Invalid or missing media type.😒</p>
        )}
      </div>
    </Filecontext.Provider>
  );
};

export default Gorge;
