import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Navlink = () => {
  const [inp, setinp] = useState<string>("");
  const cb = useRef<HTMLInputElement | null>(null);
  const [ismark, setismark] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleChange = () => {
    if (cb.current) {
      cb.current.checked = !cb.current.checked;
      setismark(cb.current.checked);
    }
  };
  useEffect(() => {
    if (inp.trim() !== "") {
      navigate(`/list/all/${inp}`);
    } else {
      navigate(`/list/all`);
    }
  }, [inp]);
  console.log(inp);
  return (
    <ul className="list-none w-fit py-3 flex gap-6 text-[#FFF] text-[16px] bg-black font-semibold rounded-4xl px-4 justify-center mx-auto conic2 relative">
      <li
        className={
          !ismark ? "hover:text-amber-400" : "hover:text-amber-400 hidden"
        }
      >
        <NavLink
          to={`/list/all`}
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          All
        </NavLink>
      </li>
      <li
        className={
          !ismark ? "hover:text-amber-400" : "hover:text-amber-400 hidden"
        }
      >
        <NavLink
          to={`/list/audio`}
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          Audio
        </NavLink>
      </li>
      <li
        className={
          !ismark ? "hover:text-amber-400" : "hover:text-amber-400 hidden"
        }
      >
        <NavLink
          to={`/list/video`}
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          Video
        </NavLink>
      </li>
      <li
        className={
          !ismark ? "hover:text-amber-400" : "hover:text-amber-400 hidden"
        }
      >
        <NavLink
          to={`/list/img`}
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          Image
        </NavLink>
      </li>
      <li
        className={
          !ismark ? "hover:text-amber-400" : "hover:text-amber-400 hidden"
        }
      >
        <NavLink
          to={`/list/all/_/true`}
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          <i className="fa-solid fa-heart"></i>
        </NavLink>
      </li>
      <li className="hidden">
        <input type="checkbox" ref={cb} className="hidden" />
      </li>
      <li className="hover:text-amber-400">
        <button onClick={handleChange} className="cursor-pointer">
          {ismark ? (
            <i className="fa-solid fa-xmark" onClick={() => setinp("")}></i>
          ) : (
            <i className="fa-solid fa-magnifying-glass"></i>
          )}
        </button>
      </li>
      <input
        type="text"
        value={inp || ""}
        onChange={(e) => {
          const value = e.target.value;
          setinp(value);
        }}
        className={
          ismark
            ? "w-full placeholder:font-semibold placeholder:text-white outline-0 focus:outline-0 border-0 transition-all duration-500"
            : "w-0 placeholder:font-semibold placeholder:text-white outline-0 focus:outline-0 border-0 transition-all duration-500"
        }
        placeholder="Serch file name..."
      />
    </ul>
  );
};

export default Navlink;
