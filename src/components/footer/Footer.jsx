import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black p-4 items-center gap-3 w-full">
      <div className="flex gap-10 text-white">
        <Link to="https://www.facebook.com/YosemiteNPS">
          <FaFacebook className="hover:scale-150" />
        </Link>
        <Link to="https://www.instagram.com/YosemiteNPS/">
          <FaInstagram className="hover:scale-150" />
        </Link>
        <Link to="https://twitter.com/YosemiteNPS">
          <FaXTwitter className="hover:scale-150" />
        </Link>
      </div>
      <p className="text-white">All rights reserved | aysemineokyay</p>
    </div>
  );
};

export default Footer;
