import React from "react";
import LeftMenu from "../../pages/Client/LeftMenu";
import Container from "../../pages/Client/Container";
import RightMenu from "../../pages/Client/RightMenu";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
  return (
    <div className="bg-bgColor">
      <main className="w-[1440px] h-[8063px] m-auto block">
        <RightMenu />
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWebsite;
