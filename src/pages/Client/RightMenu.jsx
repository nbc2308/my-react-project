import React from "react";
import { FaAdjust } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { ImUserTie } from "react-icons/im";
import { BsFillHandbagFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const navMenuData = [
  {
    img: <RiHome2Fill />,
    link: "/",
  },
  {
    img: <AiFillFileText />,
    link: "/products",
  },
  {
    img: <ImUserTie />,
    link: "#",
  },
  {
    img: <BsFillHandbagFill />,
    link: "#",
  },
  {
    img: <BsFillPencilFill />,
    link: "#",
  },
  {
    img: <RiMessage2Fill />,
    link: "#",
  },
];

const RightMenu = () => {
  return (
    <div className="right-menu w-[108px] h-[1315px] float-end">
      <div className="text-center">
        <a href="#" className="inline-block mt-12 mb-28">
          <FaAdjust />
        </a>
        <div className="nav-menu">
          <ul className="inline-grid gap-y-11">
            {navMenuData.map((item) => (
              <li key={item.img}>
                <Link to={item.link}>{item.img}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
