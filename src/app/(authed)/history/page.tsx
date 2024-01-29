"use client";
import React, { useState, useEffect, useContext } from "react";
import { Card, Table } from "antd";
import menu from "@public/assets/menu.svg";
import Image from "next/image";
import axios from "axios";
import { useUserContext } from "../../../contexts/UserContext"; // Import your user context
import { ColumnType } from "antd/es/table";

function Page() {
  const [padding, setPadding] = useState("24px 48px");
  const { user } = useUserContext(); // Use your user context
 
  const [adsHistory, setAdsHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
 
      if (window.innerWidth < 768) {
        setPadding("10px 10px");
      }
      if (window.innerWidth >= 768) {
        setPadding("12px 12px");
      }
      if (window.innerWidth >= 1024) {
        setPadding("16px 16px");
      }
      if (window.innerWidth >= 1440) {
        setPadding("24px 48px");
      }
    }
  }, []);

  const column: ColumnType<any>[] = [
    {
      title: <p className="w-[75%] flex items-end text-end ml-[15%]">Date</p>,
      dataIndex: "date",
      key: "date",
      align: "right",
      render: (text: string) => (
        <div className="flex items-center gap-6 w-full">
          <Image src={menu} alt="menu" />
          <a>{text}</a>
        </div>
      ),
    },
    {
      title: "Reach",
      dataIndex: "reach",
      key: "reach",
      align: "center",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ad cost",
      dataIndex: "cost",
      key: "cost",
      align: "center",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Platform",
      dataIndex: "platform",
      key: "platform",
      align: "center",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (text: string) => (
        <div className="text-xs md:text-base lg:text-lg 2xl:text-xl">
          {text === "pending" && <p className="text-[#FE7125]">PENDING</p>}
          {text === "delivered" && <p className="text-[#00C308]">DELIVERED</p>}
        </div>
      ),
    },
  ];


  useEffect(() => {
    const fetchAdsHistory = async () => {
      setLoading(true);

      try {
        // Check if user is logged in
        if (user) {
          const { user_id, token } = user;

          // Make API request using Axios
          const response = await axios.get(
            `http://localhost:6000/ads/history/${user_id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Assuming the API response contains an 'ads' property
          setAdsHistory(response.data.ads);
        }
      } catch (error) {
        console.error("Error fetching ad history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdsHistory();
  }, [user]); // Trigger the effect when the user changes

  return (
    <div>
      {" "}
      <p className=" text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
        Ad History
      </p>
      <Card
        className="mt-8 md:mt-12 lg:mt-16 w-[100%] mx-auto md:mx-0"
        bodyStyle={{ padding: padding }}
      >
      <Table
          dataSource={adsHistory}
          columns={column}
          className="w-[100%]"
          loading={loading}
        />
      </Card>
    </div>
  );
}

export default Page;
