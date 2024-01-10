import React from 'react'
import { FaAdjust } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { ImUserTie } from "react-icons/im";
import { BsFillHandbagFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";



const navMenuData = [
  {
    img: <RiHome2Fill />,
    link: "#"
  },
  {
    img: <AiFillFileText  />,
    link: "#"
  },
  {
    img: <ImUserTie  />,
    link: "#"
  },
  {
    img: <BsFillHandbagFill  />,
    link: "#"
  },
  {
    img: <BsFillPencilFill  />,
    link: "#"
  },
  {
    img: <RiMessage2Fill  />,
    link: "#"
  },
]

const RightMenu = () => {
  return (
    <div className="h-[1315px] w-[108px] float-end fixed top-0 right-0">
      <div className='wrapper text-center'>
        <a href='#' className='inline-block mt-12 mb-28                                                               px'>
          <FaAdjust />
        </a>
        <div>
          <ul className='inline-grid gap-y-11'>
            {navMenuData.map(item => (
              <li key={(item.img)}>
                <a href={item.link}>{item.img}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RightMenu