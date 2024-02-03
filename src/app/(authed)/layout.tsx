"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@public/assets/logowhite.svg";
import bell from "@public/assets/bell.svg";
import shop from "@public/assets/shopwhite.svg";
import rise from "@public/assets/dd.svg";
import Link from "next/link";
import logoutIcon from "@public/assets/logout.svg";
import orgShop from "@public/assets/shoporg.svg";
import orgRise from "@public/assets/rise.svg";
import menu from "@public/assets/menu-two.svg";
import { useUserContext } from "../../contexts/UserContext"; // Import your user context

function Layout({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useUserContext(); // Use your user context
  console.log(user);

  const handleMouseEnter = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave = () => {
    setIsHovered2(false);
  };

  const handleDshbordMouseEnter = () => {
    setIsHovered(true);
  };

  const handleDshbordMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex bg-[#F8F3F1] w-full overflow-hidden justify-between text-lg md:text-xl 2xl:text-2xl">
      <div
        className={` ${
          !openSidebar
            ? "w-[0%] md:w-[30%] lg:w-[25%]"
            : "w-[65%] md:w-[30%] lg:w-[25%]"
        } bg-[#6742F1] fixed z-50 md:relative pt-24 pb-12  justify-between flex flex-col h-screen text-[#FFFFFF70]`}
      >
        <div className="flex flex-col">
          <Image src={logo} alt="logo" className="w-[60%] mx-auto" />
        </div>
        <div
          className={`${
            !openSidebar ? "hidden" : "flex flex-col"
          }  justify-between h-[80%] lg:h-[75%] xl:h-[70%]`}
        >
          <div className="pl-[10%] xl:pl-[20%]">
            <Link
              href="/dashboard"
              className={`${
                // window.location.pathname === "/dashboard"
                // ?
                "bg-[#F8F3F1] text-[#000] rounded-l-[30px]"
                  // : ""
              } flex items-center gap-2 xl:gap-3 p-4 hover:p-4 hover:rounded-l-[30px] hover:bg-[#F8F3F1] hover:text-[#000]`}
              onMouseEnter={handleDshbordMouseEnter}
              onMouseLeave={handleDshbordMouseLeave}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <Image
                src={
                  // isHovered || window.location.pathname === "/dashboard"
                  //   ?
                    orgShop
                    // : shop
                }
                alt=""
              />{" "}
              <p>Ad Manager</p>
            </Link>
            <Link
              href="/history"
              className={`${
                // window.location.pathname === "/history"
                // ?
                "bg-[#F8F3F1] text-[#000] rounded-l-[30px]"
                  // : ""
              } flex items-center gap-3 mt-8 md:mt-10 xl:mt-14 p-4 hover:p-4 hover:rounded-l-[30px] hover:bg-[#F8F3F1] hover:text-[#000]`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <Image
                src={
                  // isHovered2 || window.location.pathname === "/history"
                    // ?
                    orgRise
                    // : rise
                }
                alt=""
              />{" "}
              <p>Ad History</p>
            </Link>
          </div>
          <div className="flex flex-col text-center w-full items-center gap-2 cursor-pointer">
            <Image src={logoutIcon} alt="" /> <p>Logout</p>
          </div>
        </div>
      </div>
      <div className="md:w-[68%] lg:w-[74%] xl:w-[70%] mt-8 lg:mt-12 md:pr-[2%] lg:pr-[8%] w-[98%] mx-auto md:mx-0">
        <div className="w-full flex justify-between items-center h-fit px-1 md:px-4">
          <div className="lg:w-[75%] w-[50%] md:w-[70%] bg-white p-2 md:p-4 lg:p-6 text-[#303030] rounded-[10px]">
            Welcome {user?.fullname} ( {user?.businessName} )
          </div>
          <div className="w-[35%] md:w-[25%] lg:w-[20%] bg-white p-2 lg:p-4 flex item-center rounded-[10px] justify-between">
            <Image
              src={bell}
              alt="bell"
              className="w-[30px] md:w-[40px] 2xl:w-[48px]"
            />
            <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] 2xl:w-[48px] 2xl:h-[48px] rounded-full bg-[red]"></div>
          </div>
          <Image
            src={menu}
            alt="menu"
            className="md:hidden w-[40px] cursor-pointer"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        </div>
        <div className=" mt-8 md:mt-12 lg:mt-24 2xl:mt-36 px-1 md:px-4">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
