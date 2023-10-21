"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import React from "react";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Team = () => {
  return (
    <div>
      <div className="h-[20vh] bg-brand_bggray pt-16 text-center ">
        <div className="text-[11px] uppercase">
          <Breadcrumbs />
        </div>
        <p className="text-3xl pt-3 font-bold">Team</p>
      </div>
      <div className=" ">
        <img className="w-full" src="/assets/images/layer2.png" />
      </div>
      <div className="bg-white px-10 md:px-20">
        <div className="flex justify-center text-center">
          <div className="lg:w-[70%]">
            <p className="text-3xl font-semibold">
              The best professionals for your business
            </p>
            <p className="pt-4 text-brand_text text-sm">
              We introduce you to our exceptional group of digital marketing
              experts. Our Super Team is obsessed about driving digital success
              for our clients, and their expertise spans across various
              disciplines, from SEO and social media to content creation and
              data analytics. Get to know our Super Team members, their
              backgrounds, and their areas of expertise. Rest assured that your
              digital marketing needs are in the hands of professionals who are
              dedicated to your success. We believe in collaboration,
              transparency, and a client-centric approach, and our Super Team
              embodies these values in every project we undertake.
            </p>
          </div>
        </div>
        <div className="py-10">
          <div className="flex border  teamCardShadow   lg:h-[40vh] xl:h-[50vh] 2xl:h-[30vh] flex-wrap items-center ">
            <div className="w-full md:w-6/12 bg-brand_secondary bg-opacity-20 flex justify-center items-center lg:w-3/12 h-full ">
              <img
                className="p-4 2xl:w-[70%] rounded-full "
                src="/assets/images/teamMember1.png"
              />
            </div>
            <div className="w-full md:w-6/12 lg:w-8/12 h-full">
              <div className="w-full h-full flex items-center ">
                <div className="p-4">
                  <p className="text-md xl:text-lg font-semibold">
                    Pranav Kumar
                  </p>
                  <p className="text-brand_text text-[12px] xl:text-sm pt-1">
                    CMO
                  </p>
                  <p className="text-[12px] xl:text-sm pt-4 text-brand_text">
                    Pranav Kumar, our Chief Marketing Officer (CMO) at
                    Campaignkart, is a visionary leader known for his
                    outstanding strategic acumen, keen market insights, and
                    creative prowess. With a robust track record of crafting and
                    executing high-impact marketing strategies, Pranav plays a
                    pivotal role in driving our agency&apos;s growth and
                    clients&apos; success. His responsibilities encompass
                    overseeing the marketing department, analyzing market
                    trends, leading campaign development, and measuring
                    performance using data-driven techniques. Pranav&apos;s
                    exceptional communication and collaboration skills enable
                    him to foster a culture of innovation and excellence within
                    the agency, making him a driving force as CMO at
                    Campaignkart Marketing Agency.
                  </p>
                  <div className="socials-container pt-2 flex items-center  ">
                    <Link
                      shallow
                      target="_blank"
                      href="https://www.linkedin.com/in/pranav-kumar-a734a3234/"
                    >
                      <div className="rounded-full text-lg xl:text-2xl p-3">
                        <AiFillLinkedin />
                      </div>
                    </Link>
                    <Link
                      shallow
                      target="_blank"
                      href="https://twitter.com/PranavKumar2127"
                    >
                      <div className="rounded-full text-lg xl:text-2xl p-3">
                        <BiLogoTwitter />
                      </div>
                    </Link>
                    <Link
                      shallow
                      target="_blank"
                      href="https://www.instagram.com/___pranav_tiwari__/"
                    >
                      <div className="rounded-full text-lg xl:text-2xl p-3">
                        <BiLogoInstagram />
                      </div>
                    </Link>
                    <Link
                      shallow
                      target="_blank"
                      href="mailto:CMO@campaignkart.com"
                    >
                      <div className="rounded-full text-lg xl:text-2xl p-3">
                        <BiLogoGmail />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex border teamCardShadow lg:h-[40vh] xl:h-[50vh] 2xl:h-[30vh] flex-wrap items-center ">
              <div className="flex border teamCardShadow lg:h-[40vh] xl:h-[50vh] 2xl:h-[30vh] flex-wrap items-center ">
                <div className="w-full bg-brand_secondary bg-opacity-20 md:w-6/12 flex justify-center items-center lg:w-3/12 h-full ">
                  <img
                    className="p-4  2xl:w-[70%]   rounded-full"
                    src="/assets/images/teamMember2.png"
                  />
                </div>
                <div className="w-full md:w-6/12 lg:w-8/12 h-full">
                  <div className="w-full h-full flex items-center ">
                    <div className="p-4">
                      <p className="text-md xl:text-lg font-semibold">
                        Shivanand Kumar
                      </p>
                      <p className="text-brand_text text-[12px] xl:text-sm pt-1">
                        CTO
                      </p>
                      <p className="text-[12px] xl:text-sm pt-4 text-brand_text">
                        Shivanand Kumar, our Chief Technology Officer (CTO) at
                        Campaignkart Marketing Agency, is the visionary tech
                        leader responsible for propelling our agency into the
                        digital future. His strategic acumen, deep knowledge of
                        emerging technologies, and talent for fostering
                        innovation guide our technology strategy, ensuring we
                        leverage the latest tools and data-driven insights.
                        Shivanand&apos;s adept management of our digital
                        infrastructure and technology team elevates our
                        efficiency, security, and capacity to provide top-notch,
                        tech-driven solutions to our clients, reinforcing his
                        pivotal role in our agency&apos;s success.
                      </p>
                      <div className="socials-container pt-2 flex items-center  ">
                        <Link
                          shallow
                          target="_blank"
                          href="https://www.linkedin.com/in/shivanand-kumar-515505188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        >
                          <div className="rounded-full text-lg xl:text-2xl p-3">
                            <AiFillLinkedin />
                          </div>
                        </Link>
                        <Link
                          shallow
                          target="_blank"
                          href="https://x.com/shivak_06/"
                        >
                          <div className="rounded-full text-lg xl:text-2xl p-3">
                            <BiLogoTwitter />
                          </div>
                        </Link>
                        <Link
                          shallow
                          target="_blank"
                          href="https://www.instagram.com/nomadic_digitech/"
                        >
                          <div className="rounded-full text-lg xl:text-2xl p-3">
                            <BiLogoInstagram />
                          </div>
                        </Link>
                        <Link
                          shallow
                          target="_blank"
                          href="mailto:CTO@campaignkart.com"
                        >
                          <div className="rounded-full text-lg xl:text-2xl p-3">
                            <BiLogoGmail />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex border teamCardShadow lg:h-[40vh] xl:h-[50vh] 2xl:h-[30vh] flex-wrap items-center ">
              <div className="flex border teamCardShadow lg:h-[40vh] xl:h-[50vh] 2xl:h-[30vh] flex-wrap items-center ">
                <div className="w-full bg-brand_secondary bg-opacity-20 md:w-6/12 flex justify-center items-center lg:w-3/12 h-full ">
                  <img
                    className="p-4  2xl:w-[70%]  rounded-full"
                    src="/assets/images/teamMember3.png"
                  />
                </div>
                <div className="w-full md:w-6/12 lg:w-8/12 h-full">
                  <div className="w-full h-full flex items-center ">
                    <div className="p-4">
                      <p className="text-md xl:text-lg font-semibold">
                        Ashutosh Kumar
                      </p>
                      <p className="text-brand_text text-[12px] xl:text-sm pt-1">
                        Strategy Planner
                      </p>
                      <p className="text-[12px] xl:text-sm pt-4 text-brand_text">
                        Ashutosh Kumar, our Strategy Planner at Campaignkart
                        Marketing Agency, is a strategic powerhouse, playing a
                        pivotal role in our clients&apos; success. His forte
                        lies in crafting data-driven marketing strategies that
                        align perfectly with client objectives, staying ahead of
                        market trends, and ensuring our campaigns are both
                        creative and effective. Ashutosh excels at performance
                        evaluation, using his analytical skills to optimize
                        outcomes and maintain strong client relationships. With
                        a deep understanding of digital marketing trends and a
                        commitment to continual improvement, Ashutosh is an
                        invaluable asset to our team, consistently driving
                        outstanding results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex border teamCardShadow lg:h-[40vh] xl:h-[50vh] 2xl:h-[30vh] flex-wrap items-center ">
              <div className="flex border teamCardShadow lg:h-[40vh] xl:h-[50vh] 2xl:h-[30vh] flex-wrap items-center ">
                <div className="w-full bg-brand_secondary bg-opacity-20 md:w-6/12 flex justify-center items-center lg:w-3/12 h-full ">
                  <img
                    className="p-4  2xl:w-[70%]  rounded-full"
                    src="/assets/images/teamMember4.png"
                  />
                </div>
                <div className="w-full md:w-6/12 lg:w-8/12 h-full">
                  <div className="w-full h-full flex items-center ">
                    <div className="p-4">
                      <p className="text-md xl:text-lg font-semibold">
                        Khushi Kumari
                      </p>
                      <p className="text-brand_text text-[12px] xl:text-sm pt-1">
                        PPC Expert
                      </p>
                      <p className="text-[12px] xl:text-sm pt-4 text-brand_text">
                        Khushi Kumari, our PPC Expert at Campaignkart Marketing
                        Agency, is a seasoned professional in the world of
                        pay-per-click advertising. Her role primarily
                        encompasses the strategic management of PPC campaigns,
                        from in-depth keyword research to crafting compelling ad
                        copies. Khushi excels in bid management and performance
                        analysis, consistently delivering exceptional results
                        and optimizing ROI for our clients. Her proficiency in
                        PPC platforms, analytical acumen, and client-focused
                        approach make her an invaluable asset, ensuring our
                        clients&apos; online visibility and conversions reach
                        new heights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

{
  /* <div className="pt-6">
<div className="flex border lg:py-6 teamCardShadow lg:h-[40vh] xl:h-[50vh] 2xl:h-[30vh] flex-wrap items-center ">
  <div className="w-full bg-brand_secondary bg-opacity-20 md:w-6/12 flex justify-center items-center lg:w-3/12 h-full ">
    <img
      className="p-4 rounded-full"
      src="/assets/images/teamMember4.png"
    />
  </div>
  <div className="w-full md:w-6/12 lg:w-8/12 h-full">
    <div className="w-full h-full flex items-center ">
      <div className="p-4">
        <p className="text-md xl:text-lg font-semibold">
          Khushi Kumari
        </p>
        <p className="text-brand_text text-[12px] xl:text-sm pt-1">
          PPC Expert
        </p>
        <p className="text-[12px] xl:text-sm pt-4 text-brand_text">
          Khushi Kumari, our PPC Expert at Campaignkart Marketing
          Agency, is a seasoned professional in the world of
          pay-per-click advertising. Her role primarily encompasses
          the strategic management of PPC campaigns, from in-depth
          keyword research to crafting compelling ad copies. Khushi
          excels in bid management and performance analysis,
          consistently delivering exceptional results and optimizing
          ROI for our clients. Her proficiency in PPC platforms,
          analytical acumen, and client-focused approach make her an
          invaluable asset, ensuring our clients&apos; online
          visibility and conversions reach new heights.
        </p>
      </div>
    </div>
  </div>
</div>
</div> */
}
