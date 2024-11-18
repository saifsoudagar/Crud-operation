import React from "react";
import { BsLayoutSidebar } from "react-icons/bs";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";
import { PiDotsThreeCircleLight } from "react-icons/pi";

const Header = ({ toggleSidebar, handleInsertCheckbox }) => {
  return (
    <div className="flex w-auto items-center justify-between bg-[#212121] text-white px-4 h-12 border-b border-gray-600">
    
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-[#333333] rounded relative group"
        >
          <BsLayoutSidebar />
          
          <div className="absolute w-16 left-1/2 -translate-x-1/2 mt-2 text-[8px] bg-gray-500/55 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">
            Toggle Focus Mode
          </div>
        </button>
      </div>

   
      <div className="flex items-center gap-4">
        <button
          onClick={handleInsertCheckbox}
          className="p-2 hover:bg-[#333333] rounded relative group"
        >
          <AiOutlineMenuFold />
        
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 text-[8px] bg-gray-500/55 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">
            Insert Checkbox
          </div>
        </button>
        <button className="p-2 hover:bg-[#333333] rounded relative group">
          <CiCircleInfo />
         
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 text-[8px] bg-gray-500/55 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">
            Info
          </div>
        </button>
        <button className="p-2 hover:bg-[#333333] rounded relative group">
          <PiDotsThreeCircleLight />
         
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 text-[8px] bg-gray-500/55 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">
            Actions
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
