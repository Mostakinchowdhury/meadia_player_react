import Hero from "../components/Hero.tsx";
import "./home.css";
import Navlink from "../components/Navlink.tsx";
import Filelist from "./../components/Filelist";
const List = () => {
  return (
    <section
      className={`relative h-[650px] rounded-2xl w-[400px] backdrop-blur-2xl z-50 conic p-4 overflow-hidden`}
    >
      <Hero />
      <Navlink />
      <Filelist />
    </section>
  );
};

export default List;
