"use client";
import React from "react";
import logo from "@public/assets/logo-black.svg";
import Image from "next/image";
import { Form, Input, Button, Checkbox } from "antd";
import profileIcon from "@public/assets/profile.svg";
import optionIcon from "@public/assets/option.svg";
import mailIcon from "@public/assets/mail.svg";
import passwordIcon from "@public/assets/password.svg";
import phoneIcon from "@public/assets/call.svg";
import addressIcon from "@public/assets/address.svg";
import shop from "@public/assets/shop.svg";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <div className="w-[100%] px-[2%] lg:px-[3%] xl:px-[7%] flex flex-col md:flex-row justify-between py-8 md:py-12 lg:py-24 bg-[#F8F3F1] min-h-screen">
      <div className="flex flex-col md:w-[48%] ">
        <Image src={logo} alt="logo" className="w-[40%] xl:w-[35%]" />
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4 md:mt-6 lg:mt-8">
          Signup
        </h1>
        <Form
          className="mt-2 md:mt-6 lg:mt-8 w-[90%] mx-auto md:mx-0 lg:w-[80%]"
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className="mt-2"
              placeholder="Your Name"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={profileIcon} alt="profile" />}
            />
          </Form.Item>
          <Form.Item
            name="business_name"
            rules={[
              { required: true, message: "Please input your business name!" },
            ]}
          >
            <Input
              className="mt-2"
              placeholder="Business Name"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={shop} alt="business" />}
            />
          </Form.Item>
          <Form.Item
            name="business_niche"
            rules={[
              { required: true, message: "Please input your business niche!" },
            ]}
          >
            <Input
              className="mt-2"
              placeholder="Business Niche"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={optionIcon} alt="business" />}
            />
          </Form.Item>
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
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              className="mt-2"
              placeholder="phone number"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={phoneIcon} alt="mail" />}
            />
          </Form.Item>
          <Form.Item
            name="business_address"
            rules={[
              {
                required: true,
                message: "Please input your business address!",
              },
            ]}
          >
            <Input
              className="mt-2"
              placeholder="business address"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={addressIcon} alt="mail" />}
            />
          </Form.Item>
          <Form.Item className="mt-8 md:mt-12 lg:mt-16">
            <div>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full bg-[#FFA602] text-[#150062] hover:bg-[#FFA602]"
              >
                Signup
              </Button>
              <div className="flex justify-between mt-4 text-sm md:text-base lg:text-lg xl:text-xl">
                <p>Have existing account?</p>
                <p
                  className="text-[#6742F1] cursor-pointer"
                  onClick={() => router.push("/login")}
                >
                  Login
                </p>
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
