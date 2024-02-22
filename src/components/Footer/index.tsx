import React from "react";
import Contact from "../Contact";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiSolidPhoneCall,
} from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-brand_darkgray px-10 md:px-20">
      <div className="branding py-6 flex flex-wrap md:justify-between items-center border-b border-b-brand_gray">
        <div className="text-white font-bold text-2xl">
          <p>CampaignKart Business Consulting Group</p>
        </div>
        <div className="pt-4 lg:pt-0">
          <Link shallow href="/contact">
            <Contact />
          </Link>
        </div>
      </div>
      <div className="py-10 flex lg:justify-between flex-wrap border-b border-b-brand_gray">
        <div className="w-full lg:w-3/12 ">
          <div className="">
            <p className="text-2xl tracking-wider text-white font-semibold">
              Campaign<span className="text-brand_secondary">Kart</span>
            </p>
            <p className="text-brand_gray text-sm py-4 xl:pr-20">
              We help you achieve your business goals through data driven
              digital marketing strategies. Our performance-focused campaigns
              deliver real ROI.
            </p>
            <div className="socials-container flex items-center space-x-4 pr-20">
              <Link
                target="_blank"
                href={"https://www.facebook.com/campaignkart.IN?hc_ref=ARQoda_2EB5BfzTO7RoLUEdIAb9XpNqhRjhdOlgWZ3LiimmnGKsn_-d1Lax5VJYkhv0&fref=nf&__xts__[0]=68.ARCiOU-WlUpnit_JNVuCEm9_IMv5mDiZmX1-zTp1oK9i9ocGYEaZjeNkAfa7p3fJJm1n-e6m_hZOb_8uaafnn8TUawtHhiQtZXckv80DJvh3BPHCCKFNRKeO9oERDy6kt9tPvwEWNyQz-LFqFXYJcsl82iW7DpBOKb4ZRLGVsKx2urnja8DMDwa01V4jA1VOBfWqWGCLO1YnD0XisJYt-cv7kFSj0FTs95wxpTZacQRubA4ves7BzxIVchBYFkj3kaqbT-1FVeHTEmdp2GMu1JbuZWGXs8M2Zl4jl3YW3068IEWE0W8"}
              >
                <div className="rounded-full border border-brand_gray  text-lg text-white p-3">
                  <BiLogoFacebook />
                </div>
              </Link>
              <Link target="_blank" href={"https://twitter.com/campaignkart"}>
                <div className="rounded-full border border-brand_gray  text-lg text-white p-3">
                  <BiLogoTwitter />
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/company/96931328/admin/feed/posts/"}
              >
                <div className="rounded-full border border-brand_gray  text-lg text-white p-3">
                  <FaLinkedin />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 lg:pt-0 lg:w-3/12  lg:pr-5 font-semibold text-white">
          <div className="flex items-center ">
            <div className="lg:text-xl xl:text-3xl">
              <BiSolidPhoneCall />
            </div>
            <p className="pl-4 lg:text-[12px] text-sm">+91 8709299736 , +971 503512680</p>
          </div>
          <div className="flex pt-4 items-center">
            <div>
              <img
                className="w-[20px] lg:w-[25px]"
                src="/assets/images/@.png"
              />
            </div>
            <p className="pl-3 lg:pl-2 xl:pl-5 lg:text-[12px]  xl:text-sm">
              support@campaignkart.com
            </p>
          </div>
          <div className="flex pt-4 ">
            <div>
              <img className="w-[90px]" src="/assets/images/search.png" />
            </div>
            <div className="pl-5 lg:text-[12px]">
              <p className="text-[12px] w-[80%] pt-1 ">
              <strong className="font-bold text-brand_headings">Address 1 :</strong> CampaignKart Adtech Pvt Ltd,Bannerghatta Main Rd ,Dollars
                Colony,Phase 4,J.P Nagar,Bengaluru,Karnataka 560076
              </p>
              <p className="text-[12px] w-[80%] pt-1 ">
              <strong className="font-bold text-brand_headings">Address 2 :</strong> CAMPAIGNKART - FZCO, IFZA Property FZCO, Dubai Silicon Oasis,
                DDP, Building A2, Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 lg:pt-0 lg:w-3/12  font-semibold text-white">
          <Link
            shallow
            target="_blank"
            href="https://maps.app.goo.gl/21Q9kpYPZVj92R5G7"
          >
            <div className="w-full">
              <img loading="lazy" alt="map" src="/assets/images/map.png" />
            </div>
          </Link>
        </div>
        <div className="w-full pt-10 lg:pt-0 lg:w-3/12 flex  lg:justify-center   ">
          <div>
            <p className="text-xl  text-white font-semibold">Useful Links</p>
            <ul className="text-brand_gray pt-4 ">
              <Link shallow href={"/contact"}>
                <li className="">{">"}Contact</li>
              </Link>
              <Link shallow href={"/services"}>
                {" "}
                <li className="pt-2">{">"}Our Services</li>
              </Link>
              <Link shallow href={"/terms-and-condition"}>
                <li className="pt-2">{">"}Terms & Condition</li>
              </Link>
              <Link href={"/privacy-policy"}>
                <li className="pt-2">{">"}Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-brand_gray pt-6 pb-10">
        <p>CampaignKart Business Consulting. © 2023. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
