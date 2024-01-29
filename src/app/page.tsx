"use client";
import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import logo from "@public/assets/logo-black.svg"; 
import { useRouter } from "next/navigation";
import guy from "@public/assets/guy-pic.svg";
import typingPc from "@public/assets/typing-pc.svg";
import payment from "@public/assets/payment.svg";
import framedCursor from "@public/assets/framed-cursor.svg";
import upload from "@public/assets/upload.svg";
import smsIcon from "@public/assets/carbon_platforms.svg";
import creditCard from "@public/assets/credit-card.svg";
import sendIcon from "@public/assets/send.svg";
import carriage from "@public/assets/carriage.svg";
import gender from "@public/assets/gender.svg";
import skill from "@public/assets/skill-level-basic.svg";
import department from "@public/assets/department.svg";
import Audience from "@public/assets/Audience.svg";
import Upload from "@public/assets/Upload-frame.svg";
import Deliver from "@public/assets/Deliver-ad.svg";
import phone from "@public/assets/call.svg";
import mail from "@public/assets/mail.svg";
import facebook from "@public/assets/facebook.svg";
import x from "@public/assets/x-fill.svg";
import ig from "@public/assets/instagram.svg";
import linkedin from "@public/assets/linkedin.svg";
import Pay from "@public/assets/Pay.svg";
import Blow from "@public/assets/Blow-away.svg";
import copy from "@public/assets/c.svg";

export default function Home() {
  const router = useRouter();

  const [method, setMethod] = useState("Select Audience Manager on the Ad Manager");
  const [methodIndex, setMethodIndex] = useState(1);

  const howItWorks = [
    {
      title: "Select Audience Manager on the Ad Manager",
      icon: framedCursor,
    },
    {
      title: "Upload your ad (text, graphics or video)",
      icon: upload,
    },
    {
      title: "Select ad platform (bulk SMS or Email)",
      icon: smsIcon,
    },
    {
      title: "Review ad cost and make payment",
      icon: creditCard,
    },
    {
      title: "Bombs Ads Away.",
      icon: sendIcon,
    },
  ];

  const audience = [
    {
      title: "Age",
      icon: carriage,
      width: "111px",
    },
    {
      title: "Gender",
      icon: gender,
      width: "140px",
    },
    {
      title: "Level",
      icon: skill,
      width: "119px",
    },
    {
      title: "Department",
      icon: department,
      width: "171px",
    },
  ];

  return (
    <main className="max-w-[1440px] mx-auto bg-[#F8F3F1] overflow-hidden">
      <section className="flex justify-between items-center p-2 md:p-4 lg:p-8 relative">
        <Image
          src={logo}
          alt="logo"
          className="w-[25%] md:w-[20%] lg:w-[20%] xl:w-[13%]"
        />
        <div className="flex items-center gap-2 md:gap-8 text-[#150062]  text-sm md:text-base  lg:text-lg">
          <Link href="#">About Us</Link>
          <Link href="#">How it works</Link>
        </div>
        <Link href="/login"  className="md:px-6 py-2 px-3 text-sm md:text-base lg:text-lg rounded-lg font-normal text-[#150062] border border-[#150062]"  >
          Login
        
        </Link>
      </section>
      <section className="mt-8 md:mt-12 lg:mt-28 relative">
        <div className="w-[98%] md:w-[90%] lg:w-[85%] xl:w-[65%] mx-auto text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl italic font-[400] text-[#6742F1]">
            <span className="text-[#141414]">Marketing</span> To the Right
            Audience Shouldn&apos;t be Rocket Science. We Make Sure It Isn&apos;t.
          </h1>
          <p className="my-2 md:my-4 lg:my-6 xl:my-8 text-sm md:text-base lg:text-lg xl:text-xl w-[90%] mx-auto">
            Experience effortless delivery of your adverts in any form (Text,
            Graphics, or Video) to the OAU Campus audience with Konnectify for
            Business
          </p>
          <Link href="/register" className="text-lg  md:text-2xl w-[60%] lg:text-3xl xl:text-4xl bg-[#FFA602] md:w-[35%] lg:w-[40%] xl:w-[340px] 2xl:w-[350px] py-2 md:py-4 xl:py-6 rounded-lg text-[#150062] font-semibold" 
         >
            Get Started
         </Link>
        </div>
        <div className="flex items-center justify-between">
          <Image src={typingPc} alt="logo" className="w-[50%] -mt-[5%]" />
          <Image
            src={payment}
            alt="logo"
            className="w-[50%] -mt-[25%]"
          />
        </div>
      </section>
      <section className="pt-8 md:pt-12 lg:pt-28 bg-[#ffffff] flex flex-col lg:flex-row py-16 mx-auto ">
        <div className="w-full lg:w-[34.2%] flex items-start">
          <div className="lg:w-[10%] xl:w-[100px] lg:h-[100px] xl:h-[172px] bg-[#D9D9D9]  lg:block mt-10"></div>
          <Image
            src={guy}
            alt="logo"
            className="w-[90%] lg:[90%] lg:max-w-[393px] mx-auto lg:mx-0 "
          />
        </div>
        <div className="w-[90%] lg:w-[56%] lg:ml-10 mx-auto lg:mx-0 mt-3 lg:mt-0 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic font-[400]">
              Your Gateway to Effortless{" "}
              <span className="text-[#6742F1]">Campus Advertising</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-[170%] font-normal text-[#303030] mt-6">
              Our mission is to revolutionize the way businesses connect with
              students across Nigeria, starting with the vibrant community at
              OAU.
              <br />
              <br />
              Experience precision with targeted advertising, as Konnectify
              harnesses the power of data to ensure your ads reach the right
              eyes through email and SMS marketing.
              <br />
              <br />
              Our platform eliminates the complexities of advertising with
              effortless campaign creation—whether text, graphics, or
              video—while offering campus-wide reach and affordability. Elevate
              your brand without breaking the bank;
            </p>
          </div>
          <div className="mt-6">
          <Link href="/register"  className="bg-[#FFA602] text-[#150062] font-normal text-base md:text-lg lg:text-xl px-8 py-3 md:py-4 rounded-lg "  >
              Start Advertising
           
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#ffffff] py-8 md:py-12 lg:py-24 flex flex-col">
        <h1 className="text-[#000] mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          How it works
        </h1>
        <div className="w-[100%] px-[2%] lg:px-[3%] xl:px-[7%] flex flex-col md:flex-row justify-between mt-6 md:mt-8 lg:mt-16">
          <div className="flex flex-col gap-4 lg:gap-8 md:w-[48%]">
            {howItWorks.map((item, index) => (
              <div
                className={`${
                  method === item.title &&
                  "how-it-works-box-active font-semibold"
                } how-it-works-box flex items-center p-3 lg:p-6 font-[400] text-[#303030] shadow-[0px 17px 145px 0px rgba(0, 0, 0, 0.09)] text-sm md:text-base  lg:text-lg cursor-pointer`}
                key={index}
                onClick={() => {
                  setMethod(item.title);
                  setMethodIndex(index + 1);
                }}
              >
                <Image src={item.icon} alt="logo" className="" />
                <h1 className="ml-2">{item.title}</h1>
              </div>
            ))}
          </div>
          <div className="mt-2 md:mt-0 md:w-[48%]">
            {methodIndex === 1 && (
              <Image src={Audience} alt="logo" className="w-full" />
            )}
            {methodIndex === 2 && (
              <Image src={Upload} alt="logo" className="w-full" />
            )}
            {methodIndex === 3 && (
              <Image src={Deliver} alt="logo" className="w-full" />
            )}
            {methodIndex === 4 && (
              <Image src={Pay} alt="logo" className="w-full" />
            )}
            {methodIndex === 5 && (
              <Image src={Blow} alt="logo" className="w-full" />
            )}
          </div>
        </div>
        <div className="mt-8 md:mt-12 lg:mt-24 w-[90%] xl:w-[70%] mx-auto bg-[#6742F1] flex flex-col items-center justify-center text-center text-2xl md:text-4xl lg:text-5xl text-[#fff] py-3 md:py-6 lg:py-8 rounded-[24px]">
          <p>Ready to Start Your Ad Campaign?</p>
          <button className=" text-sm md:text-base lg:text-lg w-[50%] mt-3 md:mt-4 lg:mt-8  bg-[#FFA602] md:w-[35%] xl:w-[270px] py-2 md:py-4 rounded-lg text-[#150062]" onClick={() => router.push("/register")}>
            Let&apos;s GO
          </button>
        </div>
      </section>
      <footer className="bg-[#F8F3F1] p-8 lg:p-24 grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 text-[#303030] text-sm lg:text-base font-normal  order-3 md:order-1">
          <Image src={logo} alt="logo" className="" />
          <div className="mt-2 flex items-start">
            <span><Image  src={copy} alt="logo" className="" /></span>
            <span className="ml-1">
              All Rights Reserved.
              <br className="hidden md:block" />
              Copyright 2023{" "}
            </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col lg:pl-12  gap-6 order-2 md:order-2 my-6 md:my-0 ">
          <div className="flex items-center">
            <span>
              <Image src={phone} alt="logo" className="" />
            </span>
            <span>
              234-9079100063
            </span>
          </div>
          <div className="flex items-center">
            <span>
              <Image src={mail} alt="logo" className="" />
            </span>
            <span>
              konnectifyafrica@gmail.com
            </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex items-start md:justify-end gap-8 order-1 md:order-3">
              <Image src={facebook} alt="logo" className="" />
              <Image src={x} alt="logo" className="" />
              <Image src={ig} alt="logo" className="" />
              <Image src={linkedin} alt="logo" className="" />
        </div>
      </footer>
    </main>
  );
}
