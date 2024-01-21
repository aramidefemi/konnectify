import React from "react";
import { Select } from "antd";

const { Option } = Select;
function select({ options, placeholder, width }: any) {
  return (
    <div className={`bg-[#F8F3F1] rounded-[10px] p-4`} style={{ width: width }} >
      <Select
        style={{ width: "100%" }}
        variant="borderless"
        placeholder={placeholder}
      >
        {options.map((option: any, key: any) => {
          return <Option value={option} key={key}>{option}</Option>;
        })}
      </Select>
    </div>
  );
}

export default select;
