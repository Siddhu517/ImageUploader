import React, { useRef } from "react";
import image from "../images/image.svg";

const AddImage = ({ uploadFile }) => {
  const inputRef = useRef();

  const handleAddFile = () => {
    inputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-evenly items-center flex-col h-[469px] w-[402px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-[#FFFFFF]">
      <span className="font-[500] tracking-[-0.035em] text-[18px] text-[#4F4F4F] flex justify-center items-center">
        Upload your image
      </span>
      <span className="font-[500] text-[10px] tracking-[-0.035em] flex justify-center items-center text-[#828282]">
        File should be Jpeg,Png,...
      </span>

      <div
        onDragOver={handleDragOver}
        onDrop={(e) => uploadFile(e)}
        className="flex hover:cursor-pointer justify-around items-center flex-col  h-[218.9px] w-[338px] rounded-[12px] border-dashed border-[2px] border-[#97BEF4] bg-[#F6F8FB]"
      >
        <img
          className="h-[88.24px] w-[114.13px] bg-transparent"
          src={image}
          alt=""
        />
        <span className="font-[500] text-[12px] text-[#BDBDBD] tracking-[-0.035em]">
          Drag & Drop your image here
        </span>
        <input
          id="files"
          name="files"
          accept="image/*"
          type="file"
          onChange={uploadFile}
          ref={inputRef}
          hidden
        />
      </div>
      <span className="font-[500] text-[12px] tracking-[-0.035em] leading-[18px] text-[#BDBDBD]">
        Or
      </span>
      <button
        onClick={handleAddFile}
        className="bg-[#2F80ED] h-[31.98px] w-[101px]  text-[12px] font-[500] tracking-[-0.035em] leading-[16px] text-[#FFFFFF] rounded-[8px]"
      >
        Choose a file
      </button>
    </div>
  );
};

export default AddImage;
