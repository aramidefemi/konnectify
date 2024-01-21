"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, Input, Button } from "antd";
import line from "@public/assets/Line 1.svg";
import Select from "@/ui-library/select";
import cursor from "@public/assets/cursor.svg";
import PaymentSucessful from "./fragment.tsx/payment-sucessful";

function page() {
    const [open, setOpen] = useState(false);
    const [selectWidth, setSelectWidth] = useState('46%');

    const [padding, setPadding] = useState("24px 48px");

    useEffect(() => {
    if(window.innerWidth < 768) {
      setPadding("10px 10px");
    }
    if(window.innerWidth >= 768) {
      setPadding("12px 12px");
    }
    if(window.innerWidth >= 1024) {
      setPadding("16px 16px");
    }
    if(window.innerWidth >= 1440) {
      setPadding("24px 48px");
    }
  
    }, [window.innerWidth])

    useEffect(() => {
      if (window.innerWidth < 768) {
        setSelectWidth('100%')
      } else {
        setSelectWidth('46%')
      }   
    },[window.innerWidth])
  return (
    <div className="w-[100%]">
      <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
        Audience:{" "}
        <span className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
          {" "}
          Here you select your target audience
        </span>
      </p>
      <Card
        className="mt-8 md:mt-12 lg:mt-16 w-[100%] mx-auto md:mx-0 xl:w-[85%]"
        bodyStyle={{ padding: padding }}
      >
        <div className="flex justify-between gap-6 flex-wrap items-center">
          <Select
            placeholder="Gender"
            options={["Female", "Male", "Other"]}
            width={selectWidth}
          />
          <Select
            placeholder="Level"
            options={[
              "100 Level",
              "200 Level",
              "300 Level",
              "400 Level",
              "500 Level",
              "600 Level",
            ]}
            width={selectWidth}
          />
          <Select
            placeholder="Level"
            options={[
              "100 Level",
              "200 Level",
              "300 Level",
              "400 Level",
              "500 Level",
              "600 Level",
            ]}
            width={selectWidth}
          />
          <Select
            placeholder="Level"
            options={[
              "100 Level",
              "200 Level",
              "300 Level",
              "400 Level",
              "500 Level",
              "600 Level",
            ]}
            width={selectWidth}
          />
          <Select
            placeholder="Level"
            options={[
              "100 Level",
              "200 Level",
              "300 Level",
              "400 Level",
              "500 Level",
              "600 Level",
            ]}
            width={selectWidth}
          />
          <Select
            placeholder="Level"
            options={[
              "100 Level",
              "200 Level",
              "300 Level",
              "400 Level",
              "500 Level",
              "600 Level",
            ]}
            width={selectWidth}
          />
        </div>
        <div
          className="mt-8 md:mt-12 lg:mt-16 w-[100%] flex items-center justify-between p-3 lg:p-6 rounded-[10px] text-sm md:text-base lg:text-lg xl:text-xl mb-6"
          style={{ border: "1px solid #6742F1" }}
        >
          <p>Your Reach:</p>
          <p className="text-[#6742F1]"> 3,444</p>
        </div>
      </Card>
      <div className="">
        <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl my-3 md:my-4 lg:my-8">
          Ad Platform:{" "}
          <span className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
            {" "}
            Here you select reach platform
          </span>
        </p>
        <Card
          bodyStyle={{ padding: padding }}
          className=" w-[100%] mx-auto md:mx-0 xl:w-[85%]"
        >
          <div className="mt-3 md:mt-4 lg:mt-8">
            <Select
              placeholder="Select Ad Platform"
              options={["SMS", "Email"]}
            />
          </div>
        </Card>
      </div>
      <div>
        <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl my-3 md:my-4 lg:my-8">
          Your Ad:
          <span className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
            {" "}
            Here you add your ad content
          </span>
        </p>
        <Card
          bodyStyle={{ padding: padding }}
          className=" w-[100%] mx-auto md:mx-0 xl:w-[85%]"
        >
          <div className=" mt-3 md:mt-4 lg:mt-8">
            <Input
              placeholder="Enter Sender ID"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              className="p-4"
            />
            <Input.TextArea
              placeholder="Your ad content"
              size="large"
              variant="borderless"
              className="p-4 mt-3 md:mt-4 lg:mt-8"
              style={{
                height: 240,
                resize: "none",
                backgroundColor: "#F8F3F1",
              }}
            />
          </div>
          <div className="p-2 lg:p-4 mt-3 md:mt-4 lg:mt-8 w-[100%] flex items-center justify-between text-sm md:text-base lg:text-lg xl:text-xl mb-2 md:mb-4 lg:mb-6">
            <p>
              page: <span className="text-[#6742F1]"> 1 </span>{" "}
            </p>
            <p className="">
              {" "}
              Letter count <span className="text-[#6742F1]"> 0</span>{" "}
            </p>
          </div>
        </Card>
        <div className="mt-8 md:mt-12 lg:mt-16 w-[100%] mx-auto xl:w-[85%] text-center  md:mx-0 relative">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl">Your bill</p>
          <div className="bg-white w-[50%] text-xl md:text-2xl lg:text-3xl 2xl:text-4xl py-8 mx-auto mt-4">
            NGN 27,552
          </div>
          <div>
            <Image
              src={cursor}
              alt="cursor"
              className="absolute right-0 top-0 h-[50px]  w-[50px] md:h-[100px] md:w-[100px]"
            />
            <Image
              src={line}
              alt="cursor"
              className="absolute top-[50px] right-[20px] md:top-[100px] md:right-[40px]"
            />
          </div>
          <div className="mt-8 md:mt-12 lg:mt-40 w-[60%] text-center mx-auto mb-8 md:mb-16 lg:mb-32">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-[100%] bg-[#FFA602] text-[#150062] hover:bg-[#FFA602] mx-auto"
              onClick={() => setOpen(true)}
            >
              Make Payment
            </Button>
          </div>
        </div>
        <PaymentSucessful visible={open} setVisible={setOpen} />
      </div>
    </div>
  );
}

export default page;
