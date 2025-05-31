import React from "react";
import { TbMug } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Product = () => {
  return (
    <section>
      <div className="container m-auto pt-[120px]">
        <p className="text-[20px] font-normal font-raleway text-p text-center">
          --- Sip & Savor ---
        </p>
        <h3 className="text-[55px] font-rancho font-normal text-text text-center mt-2 text-shadow-lg/100">
          Our Popular Products
        </h3>
        <div className="flex justify-center items-center">
          <button className="flex items-center text-center mx-auto py-[9px] px-[22px] bg-button2 gap-2.5 text-2xl font-normal font-rancho text-white mt-4 transition-all border border-transparent duration-300 hover:bg-transparent hover:border-text hover:text-shadow-lg/100 opacity-100 rounded-[10px]">
            Add Coffee
            <span className="text-text">
              <TbMug />
            </span>
          </button>
        </div>
        <img src="/cup.png" className="bottom-[200px] right-[100px] relative w-[341px] h-[434px]" alt="" />
        <div className="grid grid-cols-1 md:grid-cols-2  mt-12 gap-6">
          <div className="bg-product py-[30px] flex items-center gap-[33px] rounded-[10px]">
            <img src="/coffeecup.png" alt=""  className="w-[185px] h-[240px]"/>
            <div className="text-[20px] font-raleway">
              <p>
                <strong>Name :</strong> Americano Coffee
              </p>
              <p>
                <strong>Chef :</strong> Mr. Matin Paul
              </p>
              <p>
                <strong>Price :</strong> 890 Taka
              </p>
            </div>
            <div className="flex flex-col space-y-4 items-center">
                <button className="bg-icon py-[14px] px-[11px] text-white ml-12 rounded-[5px]"><FaEye className="w-5 h-5"/></button>
                <button className="bg-black text-white ml-12 py-[11px] px-[11px] rounded-[5px]"><FaPen className="w-5 h-5"/></button>
                <button className="ml-12 bg-icon2 text-white p-2.5 rounded-[5px]"><MdDelete className="w-5 h-5"/></button>
            </div>
          </div>
          <div className="bg-product py-[30px] flex items-center gap-[33px] rounded-[10px]">
            <img src="/coffeecup2.png" alt="" className="w-[185px] h-[240px]" />
            <div className="text-[20px] font-raleway">
              <p>
                <strong>Name :</strong> Americano Coffee
              </p>
              <p>
                <strong>Chef :</strong> Mr. Matin Paul
              </p>
              <p>
                <strong>Price :</strong> 890 Taka
              </p>
            </div>
            <div className="flex flex-col space-y-4 items-center">
                <button className="bg-icon py-[14px] px-[11px] text-white ml-12 rounded-[5px]"><FaEye className="w-5 h-5"/></button>
                <button className="bg-black text-white ml-12 py-[11px] px-[11px] rounded-[5px]"><FaPen className="w-5 h-5"/></button>
                <button className="ml-12 bg-icon2 text-white p-2.5 rounded-[5px]"><MdDelete className="w-5 h-5"/></button>
            </div>
          </div>
          <div className="bg-product py-[30px] flex items-center gap-[33px] rounded-[10px]">
            <img src="/coffeecup3.png" alt="" className="w-[185px] h-[240px]" />
            <div className="text-[20px] font-raleway">
              <p>
                <strong>Name :</strong> Americano Coffee
              </p>
              <p>
                <strong>Chef :</strong> Mr. Matin Paul
              </p>
              <p>
                <strong>Price :</strong> 890 Taka
              </p>
            </div>
            <div className="flex flex-col space-y-4 items-center">
                <button className="bg-icon py-[14px] px-[11px] text-white ml-12 rounded-[5px]"><FaEye className="w-5 h-5"/></button>
                <button className="bg-black text-white ml-12 py-[11px] px-[11px] rounded-[5px]"><FaPen className="w-5 h-5"/></button>
                <button className="ml-12 bg-icon2 text-white p-2.5 rounded-[5px]"><MdDelete className="w-5 h-5"/></button>
            </div>
          </div>
          <div className="bg-product py-[30px] flex items-center gap-[33px] rounded-[10px]">
            <img src="/coffeecup4.png" alt="" className="w-[185px] h-[240px]" />
            <div className="text-[20px] font-raleway">
              <p>
                <strong>Name :</strong> Americano Coffee
              </p>
              <p>
                <strong>Chef :</strong> Mr. Matin Paul
              </p>
              <p>
                <strong>Price :</strong> 890 Taka
              </p>
            </div>
            <div className="flex flex-col space-y-4 items-center">
                <button className="bg-icon py-[14px] px-[11px] text-white ml-12 rounded-[5px]"><FaEye className="w-5 h-5"/></button>
                <button className="bg-black text-white ml-12 py-[11px] px-[11px] rounded-[5px]"><FaPen className="w-5 h-5"/></button>
                <button className="ml-12 bg-icon2 text-white p-2.5 rounded-[5px]"><MdDelete className="w-5 h-5"/></button>
            </div>
          </div>
          <div className="bg-product py-[30px] flex items-center gap-[33px] rounded-[10px]">
            <img src="/coffeecup5.png" alt="" className="w-[185px] h-[240px]" />
            <div className="text-[20px] font-raleway">
              <p>
                <strong>Name :</strong> Americano Coffee
              </p>
              <p>
                <strong>Chef :</strong> Mr. Matin Paul
              </p>
              <p>
                <strong>Price :</strong> 890 Taka
              </p>
            </div>
            <div className="flex flex-col space-y-4 items-center">
                <button className="bg-icon py-[14px] px-[11px] text-white ml-12 rounded-[5px]"><FaEye className="w-5 h-5"/></button>
                <button className="bg-black text-white ml-12 py-[11px] px-[11px] rounded-[5px]"><FaPen className="w-5 h-5"/></button>
                <button className="ml-12 bg-icon2 text-white p-2.5 rounded-[5px]"><MdDelete className="w-5 h-5"/></button>
            </div>
          </div>
          <div className="bg-product py-[30px] flex items-center gap-[33px] rounded-[10px]">
            <img src="/coffeecup6.png" alt="" className="w-[153.64px] h-[240px] ml-10" />
            <div className="text-[20px] font-raleway">
              <p>
                <strong>Name :</strong> Americano Coffee
              </p>
              <p>
                <strong>Chef :</strong> Mr. Matin Paul
              </p>
              <p>
                <strong>Price :</strong> 890 Taka
              </p>
            </div>
            <div className="flex flex-col space-y-4 items-center">
                <button className="bg-icon py-[14px] px-[11px] text-white ml-12 rounded-[5px]"><FaEye className="w-5 h-5"/></button>
                <button className="bg-black text-white ml-12 py-[11px] px-[11px] rounded-[5px]"><FaPen className="w-5 h-5"/></button>
                <button className="ml-12 bg-icon2 text-white p-2.5 rounded-[5px]"><MdDelete className="w-5 h-5"/></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
