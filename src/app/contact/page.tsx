"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import AddMessage from "@/apiHelper/addMessage";
import { addNotification } from "@/stores/reducers/notificationReducer";
import { CircularProgress } from "@mui/material";
import Breadcrumbs from "@/components/Breadcrumbs";

const ContactUs = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("US");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const apiResult = await AddMessage({
        name: name,
        email: email,
        phone: phone,
        message: message,
      });
      if (apiResult.success === true) {
        dispatch(
          addNotification({
            id: new Date().valueOf(),
            message: "Message sent successfully",
            open: true,
            severity: "success",
          })
        );
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else if (apiResult.success === false) {
        dispatch(
          addNotification({
            id: new Date().valueOf(),
            message: "Form submission failed",
            open: true,
            severity: "error",
          })
        );
      }
      setLoading(false);
    } catch (error) {
      dispatch(
        addNotification({
          id: new Date().valueOf(),
          message: "Form submission failed",
          open: true,
          severity: "error",
        })
      );
      setLoading(false);
    }
  };

  return (
    <div id="#contact" className="">
      <div className="h-[20vh] bg-brand_bggray pt-16 text-center ">
        <div className="text-[11px] uppercase">
          <Breadcrumbs />
        </div>
        <p className="text-3xl pt-3 font-bold">Contact Us</p>
      </div>
      <div className="">
        <img className="w-full" src="/assets/images/layer2.png" />
      </div>
      <div className="bg-white min-h-screen py-10 flex  justify-center items-center flex-wrap">
        <div className="w-full lg:w-4/12 rounded-lg lg:rounded-l-lg lg:h-[90vh] xl:h-[100vh] 3xl:h-[90vh] border py-6 flex items-center justify-center">
          <div>
            <div className="flex w-full justify-center  items-center">
              <div className="w-8/12 flex items-center justify-center ">
                <div className="text-8xl text-brand_secondary">
                  <FaLocationDot />
                </div>
                <div className="pl-3">
                  <p className="text-xl font-semibold">CampaignKart</p>
                  <p className="text-[12px] w-[80%] pt-1 text-brand_text">
                  <strong>Address 1:</strong>  CampaignKart Adtech Pvt Ltd,Bannerghatta Main Rd ,Dollars
                    Colony,Phase 4,J.P Nagar,Bengaluru,Karnataka 560076
                  </p>
                  <p className="text-[12px] w-[80%] pt-1 text-brand_text">
                  <strong>Address 2:</strong> CAMPAIGNKART - FZCO, IFZA Property FZCO, Dubai Silicon
                    Oasis, DDP, Building A2, Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-8 pt-10">
              <div>
                <p className="text-brand_headings text-sm text-center font-semibold">
                  SUPPORT
                </p>
                <div className="flex pt-2 items-center">
                  <div>
                    <div className="flex ">
                      <div className="text-brand_headings">
                        <BiSolidPhoneCall />
                      </div>
                      <p className="text-sm pl-2">+971 503512680</p>
                    </div>
                    <div className="flex pt-1">
                      <div className="text-brand_headings">
                        <BiSolidPhoneCall />
                      </div>
                      <p className="text-sm pl-2">+971 503512680</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-brand_headings text-sm text-center font-semibold">
                  Sales
                </p>
                <div className="flex pt-2 items-center">
                  <div className="text-brand_headings">
                    <BiSolidPhoneCall />
                  </div>
                  <p className="text-sm pl-2">+91 7353122002</p>
                </div>
              </div>
            </div>
            <div className="pt-10 text-center">
              <p className="text-brand_secondary text-sm font-semibold">
                SEND AN EMAIL
              </p>
              <p>support@campaignkart.com</p>
            </div>
          </div>
        </div>
        <div className=" w-full rounded-lg lg:rounded-r-lg lg:w-4/12 lg:h-[90vh] xl:h-[100vh] 3xl:h-[90vh] px-10 py-10 md:px-10 md:py-10  lg:px-10 xl:px-16 lg:py-10 xl:py-14 bg-brand_black">
          <div>
            <p className=" lg:text-xl xl:text-3xl  text-white font-semibold">
              Send Us a Message and Learn More About our services.
            </p>
          </div>
          <div className="pt-6">
            <div>
              <input
                className="w-full py-2 focus:outline-none bg-transparent border-b text-white placeholder:text-brand_text text-sm"
                type="text"
                placeholder="*Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="pt-4">
              <input
                className="w-full py-2 focus:outline-none  bg-transparent border-b text-white placeholder:text-brand_text text-sm"
                type="text"
                placeholder="*Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="pt-10">
              <IntlTelInput
                preferredCountries={["us"]}
                value={phone}
                containerClassName="intl-tel-input"
                inputClassName="form-control w-full focus:outline-none bg-transparent border-b text-white placeholder:text-brand_text text-sm"
                formatOnInit
                onPhoneNumberChange={(
                  status,
                  value,
                  countryData,
                  number,
                  id
                ) => {
                  setPhone(number); // <-- use 'number' instead of 'value'
                }}
                onPhoneNumberBlur={(status, value, countryData, number, id) => {
                  setPhone(number); // <-- use 'number' instead of 'value'
                }}
              />
            </div>
            <div className="pt-4">
              <textarea
                className="w-full py-2 focus:outline-none  bg-transparent border-b text-white placeholder:text-brand_text text-sm"
                rows={6}
                placeholder="*Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="pt-6">
              <button
                onClick={() => handleSubmit()}
                className="rounded-md bg-brand_secondary  px-3 py-2 buttonShadow text-white  text-sm"
              >
                {loading ? (
                  <div className="text-white ">
                    <CircularProgress color="inherit" size={20} />
                  </div>
                ) : (
                  "Send message"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
