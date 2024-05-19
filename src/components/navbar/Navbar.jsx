
import yosemiteImage from "../../assets/yose.jpg";
import { Link } from "react-router-dom";
import { useGetParksQuery } from "../../app/services/nationalparkApi/nationalparkApi";
const Navbar = () => {
  const { data } = useGetParksQuery();
  const parkName = data && data.fullName ? data.fullName : "National Park";
  return (
    <div className="flex justify-between items-center bg-black lg:px-20 md:px-12 sm:px-8 px-6 lg:py-5 py-3">
      <div className="sm:flex sm:flex-row sm:gap-3 gap-1 sm:items-center sm:justify-center hidden">
        <img src={yosemiteImage} className="rounded-md w-[30px] h-[30px]" />
        <div className="sm:text-white sm:font-bold hidden lg:flex">
          {parkName}
        </div>
      </div>

      <div className="flex lg:mx-20 md:mx-8 sm:mx-6 mx-1 text-white sm:text-lg text-sm font-bold flex-1 lg:gap-20 md:gap-8 sm:gap-6 gap-2 justify-center items-center ">
        <Link to="/" className="hover:text-slate-200 active:text-slate-400">
          Home
        </Link>
        <Link
          to="/activities"
          className="hover:text-slate-200 active:text-slate-400 "
        >
          Activities
        </Link>
        <Link
          to="/fees"
          className="hover:text-slate-200 active:text-slate-400 "
        >
          Fees
        </Link>
        <Link
          to="/places"
          className="hover:text-slate-200 active:text-slate-400 "
        >
          Places
        </Link>
        <Link
          to="/gallery"
          className="hover:text-slate-200 active:text-slate-400"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="hover:text-slate-200 active:text-slate-400"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
