import { Link } from "react-router";
type props = {
  download?: string;
  sourse: string;
};
const Uppart = ({ download, sourse }: props) => {
  return (
    <div className="bg-[#FFFACA]  -m-3 rounded-t-2xl flex h-24 px-4 justify-between items-start pt-4 text-[22px]">
      <Link to="/">
        <i className="fa-solid fa-angle-left block hover:text-blue-600"></i>
      </Link>
      <a href={sourse} download={download}>
        <i className="fa-solid fa-download block hover:text-blue-600"></i>
      </a>
    </div>
  );
};

export default Uppart;
