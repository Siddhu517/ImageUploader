import React from "react";

const Preview = ({ imageUrl }) => {
  return (
    <div className="flex justify-evenly items-center flex-col rounded-[12px] h-[454.96px] w-[400.36px] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <span className=" flex justify-center items-center h-[35px] w-[35px] rounded-full bg-[#219653] text-white text-3xl">
        <ion-icon name="checkmark-sharp"></ion-icon>
      </span>
      <span className="font-[500] tracking-[-0.035em] leading-[27px] text-[18px] text-[#4F4F4F]">
        Uploaded Successfully!
      </span>
      <img
        className="h-[224.4px] w-[338px] rounded-[12px]"
        src={imageUrl ? imageUrl.url : ""}
        alt={imageUrl ? imageUrl.publicId : ""}
      />
      <div className="flex  bg-[#F6F8FB] justify-between items-center h-[34px] w-[338px] rounded-[8px] border-[1px] border-solid border-[#E0E0E0]">
        <span className="font-[500] text-[8px] tracking-[-0.035em] ml-[7.12px] leading-[12px] text-[#4F4F4F] overflow-hidden">
          {imageUrl ? imageUrl.url : ""}
        </span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(imageUrl.url);
          }}
          className="flex justify-center items-center h-[30px] w-[74px] rounded-[8px] bg-[#2F80ED] hover:bg-cyan-600  font-[500] text-[8px] tracking-[-0.035em] leading-[12px] text-[#FFFFFF] mr-[2px] ml-[2px]"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default Preview;
