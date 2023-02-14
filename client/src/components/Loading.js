import React from "react";

const Loading = ({ uploadPercentage }) => {
  return (
    <div className="flex justify-around px-[32px] py-[32px] items-center flex-col h-[143.57px] w-[400.36px] rounded-[12px] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <span className="flex self-start items-center font-[500] text-[18px] tracking-[-0.035em] leading-[27px] text-[#4F4F4F]">
        Uploading...
      </span>
      <div className="w-full bg-[#F2F2F2] rounded-[8px]  h-[6px] dark:bg-[#F2F2F2]">
        <div
          className="bg-[#2F80ED] h-[6px]  rounded-[8px] "
          style={{ width: uploadPercentage }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
