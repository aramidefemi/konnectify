"use client";
import React from "react";
import logo from "@public/assets/logo-black.svg";
import Image from "next/image";
import { Form, Input, Button} from "antd";
import mailIcon from "@public/assets/mail.svg";
import passwordIcon from "@public/assets/password.svg";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <div className="w-[100%] px-[2%] lg:px-[3%] xl:px-[7%] flex flex-col md:flex-row justify-between py-8 md:py-12 lg:py-24 bg-[#F8F3F1] min-h-screen">
      <div className="flex flex-col md:w-[48%] ">
        <Image src={logo} alt="logo" className="w-[40%] xl:w-[35%]" />
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-8 md:mt-12 lg:mt-16">
          Welcome back,
        </h1>
        <Form
          className="mt-8 md:mt-12 lg:mt-16 w-[90%] mx-auto md:mx-0 lg:w-[80%]"
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              className="mt-2"
              placeholder="Email"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={mailIcon} alt="mail" />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="mt-2"
              placeholder="Password"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={passwordIcon} alt="password" />}
            />
          </Form.Item>

          <Form.Item className="mt-8 md:mt-12 lg:mt-32">
            <div>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full bg-[#FFA602] text-[#150062] hover:bg-[#FFA602]"
                onClick={() => router.push("/dashboard")}
              >
                Login
              </Button>
              <div className="flex justify-between mt-4 text-sm md:text-base lg:text-lg xl:text-xl">
                <p>Don't have an account?</p>
                <p className="text-[#6742F1] cursor-pointer" onClick={() => router.push("/register")}>Sign up</p>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>
      <div className="mt-2 hidden md:flex md:mt-0 md:w-[48%] h-[800px] rounded-[20px] register text-[#ffffff] p-4 xl:p-8 text-2xl md:text-4xl lg:text-5xl xl:text-6xl relative font-bold">
        <p className="absolute bottom-[10%]">Start your campus advertising.</p>
      </div>
    </div>
  );
}

export default page;
