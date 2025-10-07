import Hero from "../components/Hero.tsx";
import Write from "../components/Write.tsx";
import "./home.css";
import Img from "./../components/Img.tsx";
const Home = () => {
  window.addEventListener("resize", (e) => {
    console.log(e);
  });
  return (
    <section
      className={`relative h-[650px] rounded-2xl w-[400px] backdrop-blur-2xl z-50 conic p-4 overflow-hidden`}
    >
      <Hero />
      <Write />
      <Img />
    </section>
  );
};

export default Home;
