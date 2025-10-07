import wal from "../assets/vai.png";
import { Link } from "react-router";
import buton from "../assets/Button Arrow.png";
const Img = () => {
  return (
    <div className="mt-4">
      <img src={wal} />
      <Link to="/list/all" className="flex justify-center mt-6">
        <img src={buton} width="60px" />
      </Link>
    </div>
  );
};

export default Img;
