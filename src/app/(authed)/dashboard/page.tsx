"use client";
import React, {useState, useEffect, useContext } from "react";
import Image from "next/image";
import { Card, Input, Button, message } from "antd";
import line from "@public/assets/Line 1.svg";
import Select from "@/ui-library/select";
import cursor from "@public/assets/cursor.svg";
import PaymentSucessful from "./fragment.tsx/payment-sucessful";
import { useUserContext } from "../../../contexts/UserContext"; // Import your user context
import useAdCreation from './useAdCreation';
import { usePaystackPayment } from 'react-paystack';


const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: 'pk_test_2249d3768f6ccf7617fee357012db2c495deafe9',
};
function Page() {
    const [open, setOpen] = useState(false);
    const [selectWidth, setSelectWidth] = useState('46%');

    const [padding, setPadding] = useState("24px 48px");

    const { user } = useUserContext(); // Use your user context

    const { createAd, loading, error, success } = useAdCreation();

  useEffect(() => {
      if (typeof window !== "undefined") {
 
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
}
    }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
 
      if (window.innerWidth < 768) {
        setSelectWidth('100%')
      } else {
        setSelectWidth('46%')
      }
    }     
    },[])

    
  // you can call this function anything
  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
   
    const initializePayment = usePaystackPayment({ ...config,});
   

    const handleAdCreation = async () => {
      try {
        if (user) {
          const { token } = user;
          const adData = {
            audience: {
              gender: "Male",
              level: "Senior",
              religion: "Christian",
              department: "IT",
              residence: "City",
              stateOfOrigin: "Lagos",
            },
            platform: "sms",
            senderId: "YourSender",
            adContent: "Your ad content goes here",
            userId: "65b6dba0afa437b9fb883f9d",
          };
  
          // Make API request using Axios
        
         const response = await createAd(adData, token);
          // Assuming the API response contains a success message or data
          console.log("Ad creation successful:", response.data);
          initializePayment({onSuccess, onClose})
  
          // Optionally, show a success message
          message.success("Ad creation successful");
        }
      } catch (error) {
        console.error("Ad creation failed", error);
        // Optionally, show an error message
        message.error("Ad creation failed");
      }
    };
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
        onClick={handleAdCreation}
      >
        Make Payment
      </Button>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Page;
