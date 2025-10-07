const Hero = () => {
  return (
    <div className="absolute inset-[5px] rounded-2xl bg-white z-[-10] overflow-hidden">
      <div className="w-[200px] h-[150px] bg-[#FFE3D3] right-[-23px] top-[-40px] absolute rotate-235 rounded-tr-full rounded-tl-full rounded-bl-[100px] rounded-br-[50px] overflow-hidden"></div>
      <div className="w-[390px] h-[320px] overflow-hidden bg-[#E9F7FF] rounded-t-[400px] rounded-r-[400px] rounded-bl-2xl rounded-br-2xl absolute bottom-[0px] block left-[50%] translate-x-[-50%] z-10"></div>
    </div>
  );
};

export default Hero;
