// import React from 'react';
import { useParams, Link } from "react-router";
import { Files } from "../filejson/Files.tsx";
import { useRef } from "react";
const Filelist = () => {
  const { tp, serch, isfavourite } = useParams<{
    tp: string;
    serch?: string;
    isfavourite?: string;
  }>();
  const itemRefs = useRef<HTMLAnchorElement[]>([]);
  const dserch = serch === "_" ? "" : serch || "";
  const isfav = isfavourite === "true";

  const filf =
    tp == "all" && isfav
      ? Files.filter((e) => {
          return e.isfavorite === true;
        })
      : tp == "all"
      ? Files.filter((e) => e.name.toLowerCase().includes(dserch.toLowerCase()))
      : Files.filter((e) => {
          return (
            e.type == tp && e.name.toLowerCase().includes(dserch.toLowerCase())
          );
        });
  console.log(JSON.stringify(filf));
  return (
    <section className="mt-4 px-2 py-1 flex flex-col gap-2 overflow-auto h-[550px] custom-scrollbar">
      {filf.map((e, ind) => (
        <Link
          to={`/gorge/${e.id}`}
          ref={(el) => {
            if (el) {
              itemRefs.current[ind] = el;
            }
          }}
          key={e.id}
          className={`${
            e.id % 2 == 0 ? "bg-[#FFFACA]" : "bg-[#FFE8EC]"
          } py-2 px-3 rounded-xl flex justify-between items-center gap-6`}
        >
          <div className="bg-black p-1">
            <img src={e.thumnail} className="w-[40px] rounded-lg" />
          </div>
          <div>
            <h2 className="text-sm">{e.name}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Filelist;
