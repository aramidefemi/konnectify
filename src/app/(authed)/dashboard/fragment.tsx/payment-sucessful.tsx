import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import rocket from "@public/assets/rocket.svg";
import Image from "next/image";

function PaymentSucessful({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [width, setWidth] = useState(800);

  useEffect(() => {
    if (typeof window !== "undefined") {
 
      if (window.innerWidth < 768) {
        setWidth(300);
      }
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setWidth(400);
      }
      if (window.innerWidth >= 1024) {
        setWidth(650);
      }
      if (window.innerWidth >= 1550) {
        setWidth(800);
      }
    }
  }, []);

  return (
    <Modal
      closable={true}
      footer={null}
      open={visible}
      onCancel={() => setVisible(false)}
      width={width}
    >
      <div className="text-lg md:text-xl lg:text-2xl text-center">
        <div className="bg-[#6742F1] flex flex-col items-center justify-center rounded-[23px] p-8  my-8 md:my-12 lg:my-16">
          <Image src={rocket} alt="rocket" />
          <h1 className="mt-4 md:mt-6 lg:mt-8 text-[#FFFFFF]">
            Payment successful...Bombing ad away
          </h1>
        </div>
        <div>
          <p className="mb-8 md:mb-12 lg:mb-16 text-[#000]">
            Ad will be delivered to all recipients in a bit. Kindly check ad
            status in <span className="text-[#6742F1]">ads history</span>
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default PaymentSucessful;
