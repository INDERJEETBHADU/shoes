import React, { useState } from "react";
import nikelogo from "../assets/images/svg/nike_logo.svg";

function Navbr() {
  const [show, setfirst] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div className=" max_w_972 position-absolute z-2  ">
        <div className="  d-flex   w-100  align-items-center  justify-content-between ">
          <img className=" cursor_pointer" src={nikelogo} alt="nikelogo" />
          <ul
            className={` ${
              show ? "end-0" : "right_100"
            } mb-0  d-flex  gap-4 fw-semibold  mobile-view text_30 lh_36 text-black `}
          >
            <li>
              <a
                onClick={() => {
                  setfirst(!show);
                }}
                className="text-black"
                href=""
              >
                Men
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setfirst(!show);
                }}
                className="text-black"
                href=""
              >
                {" "}
                Womem{" "}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setfirst(!show);
                }}
                className="text-black"
                href=""
              >
                Kids
              </a>
            </li>
            <li>
              <a className="text-black" href="">
                Collection
              </a>
            </li>
          </ul>
          <div className=" d-flex  align-items-center gap-5">
            <div className=" d-flex  d-lg-none  align-items-center  gap-4">
              <span>
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66668 0.4375C13.3381 0.4375 17.125 4.49493 17.125 9.5C17.125 11.6649 16.4165 13.6524 15.2344 15.211L20.952 21.3371C21.2937 21.7032 21.2937 22.2968 20.952 22.6629C20.6415 22.9958 20.1553 23.026 19.8128 22.7536L19.7147 22.6629L13.9969 16.5369C12.5422 17.8034 10.6872 18.5625 8.66668 18.5625C3.99527 18.5625 0.208344 14.5051 0.208344 9.5C0.208344 4.49493 3.99527 0.4375 8.66668 0.4375ZM8.66668 2.3125C4.96176 2.3125 1.95834 5.53045 1.95834 9.5C1.95834 13.4695 4.96176 16.6875 8.66668 16.6875C12.3715 16.6875 15.375 13.4695 15.375 9.5C15.375 5.53045 12.3715 2.3125 8.66668 2.3125Z"
                    fill="#212121"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0246 6.97439L14.9988 8.00251L13.9696 6.97345C11.3458 4.34963 7.09172 4.34963 4.46788 6.97345C1.84404 9.59729 1.84404 13.8514 4.46788 16.4752L14.3371 26.3444C14.7033 26.7105 15.2968 26.7105 15.6629 26.3444L25.5398 16.4734C28.1578 13.8408 28.1623 9.5987 25.5379 6.97439C22.9093 4.34578 18.6533 4.34578 16.0246 6.97439ZM24.2103 15.1512L15 24.3557L5.7937 15.1494C3.9021 13.2578 3.9021 10.1909 5.7937 8.29928C7.6853 6.40768 10.7522 6.40768 12.6438 8.29928L14.3406 9.99609C14.7129 10.3684 15.3188 10.3612 15.6821 9.98003L17.3504 8.30021C19.2468 6.40384 22.3158 6.40383 24.2121 8.30021C26.1041 10.1923 26.1009 13.25 24.2103 15.1512Z"
                    fill="#212121"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 8.75V6.25C8.75 4.17894 10.4289 2.5 12.5 2.5C13.4605 2.5 14.3365 2.86108 15 3.45488C15.6635 2.86106 16.5396 2.5 17.5 2.5C19.5711 2.5 21.25 4.17894 21.25 6.25V8.75H23.125C24.1605 8.75 25 9.58946 25 10.625V23.1312C25 25.544 23.044 27.5 20.6312 27.5H10C7.23857 27.5 5 25.2614 5 22.5V10.625C5 9.58946 5.83946 8.75 6.875 8.75H8.75ZM17.0438 25.625C16.5513 24.9179 16.2625 24.0582 16.2625 23.1312V10.625H6.875V22.5C6.875 24.2259 8.27411 25.625 10 25.625H17.0438ZM14.375 8.75V6.25C14.375 5.21446 13.5355 4.375 12.5 4.375C11.4645 4.375 10.625 5.21446 10.625 6.25V8.75H14.375ZM16.25 8.75H19.375V6.25C19.375 5.21446 18.5355 4.375 17.5 4.375C16.9187 4.375 16.3994 4.63945 16.0555 5.0546C16.1816 5.43004 16.25 5.83204 16.25 6.25V8.75ZM18.1375 23.1312C18.1375 24.5085 19.254 25.625 20.6312 25.625C22.0085 25.625 23.125 24.5085 23.125 23.1312V10.625H18.1375V23.1312Z"
                    fill="#212121"
                  />
                </svg>
              </span>
            </div>
            <div
              onClick={() => {
                setfirst(!show);
              }}
              class="menu d-block   me-sm-5 me-3 d-lg-none z_9  "
            >
              <span></span>
              <span class="my-2"></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbr;
