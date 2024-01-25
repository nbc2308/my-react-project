import React from "react";

const profileIcon = [
  {
    img: <img src="/image/Icons-dribbble.png" alt="" />,
    link: "#",
  },
  {
    img: <img src="/image/Icons-Youtube.png" alt="" />,
    link: "#",
  },
  {
    img: <img src="/image/Icons-twitter.png" alt="" />,
    link: "#",
  },
  {
    img: <img src="/image/Icons-instagram.png" alt="" />,
    link: "#",
  },
  {
    img: <img src="/image/Icons-facebook.png" alt="" />,
    link: "#",
  },
];

const LeftMenu = () => {
  return (
    <div className="left-menu w-[305px] h-[1515px] float-start inline-block">
      {/* Begin ProFile-left-menu */}
      <div className="profile text-center mt-[50px]">
        <img
          className="h-auto inline-flex mb-[30px]"
          src="image/Profile.jpg"
          alt=""
        />
        <p className="font-medium">Rayan Adlardard</p>
        <p className="text-slate-600 mt-[12px]">Font-end Developer</p>
        <div className="icons grid justify-items-center"></div>
      </div>
      <div className="social-icons mt-[25px]">
        <ul className="flex justify-center gap-x-5">
          {profileIcon.map((item) => (
            <li
              className="
              flex justify-center
              items-center
              w-[25px]
              h-[25px]
              bg-[#FFB400]
              border-solid
              border-2
              rounded-full
              border-[#FFB400]"
              key={item.img}
            >
              <a href={item.link}>{item.img}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* End ProFile-left-menu */}

      {/* Begin About-left-menu */}
      <div className="about grid justify-items-center mt-[48px]">
        <span className="w-[220px] h-[25px] mb-4">
          <p className="w-auto px-1 bg-[#FFB400] inline-flex justify-center items-center">
            Age:
          </p>
          <p className="float-end">24</p>
        </span>

        <span className="w-[220px] h-[25px] mb-4">
          <p className="w-auto px-1 bg-[#FFB400] inline-flex justify-center items-center">
            Residence:
          </p>
          <p className="float-end">BD</p>
        </span>

        <span className="w-[220px] h-[25px] mb-4">
          <p className="w-auto px-1 bg-[#FFB400] inline-flex justify-center items-center">
            Freelance:
          </p>
          <p className="float-end text-[#7EB942]">Available</p>
        </span>

        <span className="w-[220px] h-[25px] mb-4">
          <p className="w-auto px-1 bg-[#FFB400] inline-flex justify-center items-center">
            Address:
          </p>
          <p className="float-end">Dhaka,Bangladesh</p>
        </span>
      </div>
      {/* End About-left-menu */}

      {/* Begin Languages-left-menu */}
      <div className="languages grid justify-items-center mt-[35px]">
        <p className="float-start w-[220px] font-medium mb-5">Languages</p>
        <span className="w-[220px] h-[25px] mb-4 font-light text-sm">
          <p className="w-auto inline-flex justify-center items-center">
            Bangla
          </p>
          <p className="float-end">100%</p>
          <div
            className="
          mt-2
          percent bg-gradient-to-r 
          from-[#FFB400] to-[#FFB400] 
          w-[218px] h-[2px] 
          outline outline-1 outline-offset-[1px] outline-[#FFB400] 
          rounded-full "
          ></div>
        </span>

        <span className="w-[220px] h-[25px] mb-4 font-light text-sm">
          <p className="w-auto inline-flex justify-center items-center">
            English
          </p>
          <p className="float-end">80%</p>
          <div
            className="
          mt-2
          percent bg-gradient-to-r
          from-[#FFB400] via-80% via-[#e4c438]  
          w-[218px] h-[2px] 
          outline outline-1 outline-offset-[1px] outline-[#FFB400] 
          rounded-full "
          ></div>
        </span>

        <span className="w-[220px] h-[25px] mb-4 font-light text-sm">
          <p className="w-auto inline-flex justify-center items-center">
            Spanish
          </p>
          <p className="float-end">60%</p>
          <div
            className="
          mt-2
          percent bg-gradient-to-r 
          from-[#FFB400] via-60% via-[#e4c438]
          w-[218px] h-[2px] 
          outline outline-1 outline-offset-[1px] outline-[#FFB400] 
          rounded-full "
          ></div>
        </span>
      </div>
      {/* End Languages-left-menu */}

      {/* Begin Skill-left-menu */}
      <div className="Skill grid justify-items-center mt-[35px]">
        <p className="float-start w-[220px] font-medium mb-5">Skills</p>
        <span className="w-[220px] h-[25px] mb-4 font-light text-sm">
          <p className="w-auto inline-flex justify-center items-center">Html</p>
          <p className="float-end">90%</p>
          <div
            className="
          mt-2
          percent bg-gradient-to-r 
          from-[#FFB400] via-90% to-[#e4c438] 
          w-[218px] h-[2px] 
          outline outline-1 outline-offset-[1px] outline-[#FFB400] 
          rounded-full "
          ></div>
        </span>

        <span className="w-[220px] h-[25px] mb-4 font-light text-sm">
          <p className="w-auto inline-flex justify-center items-center">CSS</p>
          <p className="float-end">85%</p>
          <div
            className="
          mt-2
          percent bg-gradient-to-r
          from-[#FFB400] via-85% via-[#e4c438]  
          w-[218px] h-[2px] 
          outline outline-1 outline-offset-[1px] outline-[#FFB400] 
          rounded-full "
          ></div>
        </span>

        <span className="w-[220px] h-[25px] mb-4 font-light text-sm">
          <p className="w-auto inline-flex justify-center items-center">Js</p>
          <p className="float-end">80%</p>
          <div
            className="
          mt-2
          percent bg-gradient-to-r 
          from-[#FFB400] via-80% via-[#e4c438]
          w-[218px] h-[2px] 
          outline outline-1 outline-offset-[1px] outline-[#FFB400] 
          rounded-full "
          ></div>
        </span>

        <span className="w-[220px] h-[25px] mb-4 font-light text-sm">
          <p className="w-auto inline-flex justify-center items-center">PHP</p>
          <p className="float-end">75%</p>
          <div
            className="
          mt-2
          percent bg-gradient-to-r 
          from-[#FFB400] via-75% via-[#e4c438]
          w-[218px] h-[2px] 
          outline outline-1 outline-offset-[1px] outline-[#FFB400] 
          rounded-full "
          ></div>
        </span>

        <span className="w-[220px] h-[25px] mb-4 font-light text-sm">
          <p className="w-auto inline-flex justify-center items-center">
            WorldPress
          </p>
          <p className="float-end">85%</p>
          <div
            className="
          mt-2
          percent bg-gradient-to-r 
          from-[#FFB400] via-85% via-[#e4c438]
          w-[218px] h-[2px] 
          outline outline-1 outline-offset-[1px] outline-[#FFB400] 
          rounded-full "
          ></div>
        </span>
      </div>
      {/* End Skill-left-menu */}

      {/* Begin Extra-skills-left-menu */}
      <div className="Extra-skills grid justify-items-center mt-[30px]">
        <p className="float-start w-[220px] font-medium mb-5">Extra Skills</p>
        <span className="w-[220px] h-[25px] mb-1 font-light text-sm flex">
          <img
            src="image/icons.png"
            className="w-auto h-4 inline-flex justify-center items-center mr-2"
          ></img>
          <p className="w-auto inline-flex justify-center items-center">
            Bootstrap, Materialize
          </p>
        </span>

        <span className="w-[220px] h-[25px] mb-1 font-light text-sm">
          <img
            src="image/icons.png"
            className="w-auto h-4 inline-flex justify-center items-center mr-2"
          ></img>
          <p className="w-auto inline-flex justify-center items-center">
            Stylus, Sass, Less
          </p>
        </span>

        <span className="w-[220px] h-[25px] mb-1 font-light text-sm">
          <img
            src="image/icons.png"
            className="w-auto h-4 inline-flex justify-center items-center mr-2"
          ></img>
          <p className="w-auto inline-flex justify-center items-center">
            Gulp, Webpack, Grunt
          </p>
        </span>

        <span className="w-[220px] h-[25px] mb-1 font-light text-sm">
          <img
            src="image/icons.png"
            className="w-auto h-4 inline-flex justify-center items-center mr-2"
          ></img>
          <p className="w-auto inline-flex justify-center items-center">
            GIT Knowledge
          </p>
        </span>
      </div>
      {/* End Extra-skills-left-menu */}
      <div className="btn flex justify-center mt-4">
        <img src="image/CV2.png"></img>
      </div>
    </div>
  );
};

export default LeftMenu;
