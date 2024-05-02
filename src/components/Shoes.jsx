import React from "react";
import Navbr from "./Navbr";
import first_shoes from "../assets/images/png/first_shoe.png";
import second_shoes from "../assets/images/png/second_shoes.png";
import third_shoes from "../assets/images/png/third_shoe.png";
import lg_green_shoe from "../assets/images/png/green_shoes_lg.png";
import lg_grey_shoe from "../assets/images/png/grey_shoes_lg.png";
import lg_khaki_shoe from "../assets/images/png/brown_shoes_lg.png";
import sm_green_shoe from "../assets/images/png/small_green.png";
import sm_grey_shoe from "../assets/images/png/small_grey.png";
import sm_khaki_shoe from "../assets/images/png/small_brown.png";

function Shoes() {
  return (
    <>
      <div className="  ">
        <div className=" position-relative   ">
          <Navbr />
          <div className=" d-flex  vh-100   ">
            <div className="green_box      overflow-hidden  d-flex  align-items-center  justify-content-center ">
              <img
                className=" max_w_542 rotation_shoe rotation_shoe2 d-none d-lg-block w-100  "
                src={first_shoes}
                alt="first_shoes"
              />
              <img
                className="rotation_shoe rotation_shoe2 d-none d-sm-block d-lg-none"
                src={lg_green_shoe}
                alt="lg_green_shoe"
              />
              <img
                className="rotation_shoe rotation_shoe2 d-sm-none "
                src={sm_green_shoe}
                alt="sm_green_shoe"
              />
            </div>
            <div className="grey_box overflow-hidden  d-flex   align-items-center  justify-content-center">
              <div className="">
                <img
                  className="rotation_shoe max_w_460  d-none d-lg-block  "
                  src={second_shoes}
                  alt="second_shoes"
                />
                <img
                  className="rotation_shoe d-none d-sm-block d-lg-none"
                  src={lg_grey_shoe}
                  alt="lg_green_shoe"
                />
                <img
                  className="rotation_shoe d-lg-none d-sm-none"
                  src={sm_grey_shoe}
                  alt="lg_green_shoe"
                />
              </div>
            </div>
            <div className="khaki_box overflow-hidden  d-flex  align-items-center  justify-content-center">
              <div className="">
                <img
                  className=" rotation_shoe max_w_460 d-none  d-lg-block  "
                  src={third_shoes}
                  alt="third_shoes"
                />
                <img
                  className="rotation_shoe d-none d-sm-block d-lg-none"
                  src={lg_khaki_shoe}
                  alt="lg_green_shoe"
                />
                <img
                  className="rotation_shoe d-lg-none d-sm-none"
                  src={sm_khaki_shoe}
                  alt="lg_green_shoe"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shoes;
