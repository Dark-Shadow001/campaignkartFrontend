"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div id="#terms-and-condition">
      <div className="h-[20vh] bg-brand_bggray pt-16 text-center ">
        <div className="text-[11px] uppercase">
          <Breadcrumbs />
        </div>
        <p className="text-3xl pt-4 font-bold">Terms & Conditions</p>
      </div>
      <div className=" ">
        <img className="w-full " src="/assets/images/layer2.png" />
      </div>
      <div className="px-10 lg:px-20 bg-white py-10 ">
        <div>
          <p className="text-xl font-semibold">
            By accessing this Website, which is available at
            <Link shallow href="/">
              <span className="px-2 text-brand_secondary">
                https://campaignkart.com
              </span>
            </Link>
            , you are indicating your acceptance of and agreement to comply with
            the following Website Terms and Conditions of Use. You also
            acknowledge your responsibility to adhere to all applicable local
            laws, including the Information Technology Act, 2000 (India). If you
            do not agree with any of these terms, you are prohibited from
            accessing this site. The materials presented on this Website are
            protected by copyright and trademark laws.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">Agency Service Refunds</p>
          <p className="pt-2 text-brand_text">
            All sales are considered final, and the Company does not provide any
            money-back guarantees. You understand and agree that there are no
            circumstances under which you will be entitled to a refund for our
            services.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">Q2 Services Refunds</p>
          <p className="pt-2 text-brand_text">
            For Basic services, no refunds will be issued. Furthermore, no
            refund will be provided if we are able to generate sales or leads
            that can be reasonably justified based on our setup. The
            quantification of sales or leads is subjective and depends on
            various factors, including your product or service, landing page,
            pricing, and numerous other marketing variables.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">Use License</p>
          <p className="pt-2 text-brand_text">
            You are granted permission to temporarily download one copy of the
            materials found on the CampaignKart Website for personal,
            non-commercial, and transitory viewing only. This is a license grant
            and not a transfer of title. Under this license, you are expressly
            prohibited from:
          </p>
          <ol className="pt-2 text-brand_text">
            <li>{"-"} Modifying or copying the materials.</li>
            <li>
              {"-"} Using the materials for any commercial purpose or for public
              display.
            </li>
            <li>
              {"-"} Attempting to reverse engineer any software contained on
              CampaignKart&apos;s Website.
            </li>
            <li>
              {"-"} Removing any copyright or other proprietary notations from
              the materials.
            </li>
            <li>
              {"-"} Transferring the materials to another person or &quot;mirroring&quot;
              the materials on any other server..
            </li>
          </ol>
          <p className="pt-2 text-brand_text">
            Failure to comply with any of these restrictions will result in the
            termination of the license granted by CampaignKart. Upon
            termination, your viewing rights will also be revoked, and you must
            promptly destroy any downloaded materials in your possession,
            whether in printed or electronic format.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">Disclaimer</p>
          <p className="pt-2 text-brand_text">
            All materials presented on CampaignKart&apos;s Website are provided
            &quot;as is.&quot; CampaignKart makes no warranties, whether expressed or
            implied, and hereby negates and disclaims all other warranties.
            Furthermore, CampaignKart does not make any representations
            regarding the accuracy or reliability of the use of the materials on
            its Website or concerning any sites linked to this Website.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">Limitations</p>
          <p className="pt-2 text-brand_text">
            CampaignKart or its suppliers will not be held accountable for any
            damages that may arise from the use or inability to use the
            materials on CampaignKart&apos;s Website, even if CampaignKart or an
            authorized representative of this Website has been notified, orally
            or in writing, of the possibility of such damage. Some jurisdictions
            do not allow limitations on implied warranties or limitations of
            liability for incidental damages, so these limitations may not apply
            to you.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">Revisions and Errata</p>
          <p className="pt-2 text-brand_text">
            The materials appearing on CampaignKart&apos;s Website may include
            technical, typographical, or photographic errors. CampaignKart does
            not guarantee that any of the materials on this Website are
            accurate, complete, or current. CampaignKart reserves the right to
            make changes to the materials presented on its Website at any time,
            without prior notice. However, CampaignKart does not commit to
            updating the materials.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">Links</p>
          <p className="pt-2 text-brand_text">
            CampaignKart has not reviewed all of the sites linked to its Website
            and is not responsible for the content of any such linked site. The
            inclusion of any link does not imply endorsement by CampaignKart of
            the linked site. The use of any linked website is at the user&apos;s
            own risk.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">
            Site Terms of Use Modifications
          </p>
          <p className="pt-2 text-brand_text">
            CampaignKart may revise these Terms of Use for its Website at any
            time, without prior notice. By using this Website, you agree to be
            bound by the current version of these Terms and Conditions of Use.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">Your Privacy</p>
          <p className="pt-2 text-brand_text">
            Please review our Privacy Policy.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-semibold">Governing Law</p>
          <p className="pt-2 text-brand_text">
            Any claim related to CampaignKart&apos;s Website shall be governed
            by the laws of India, with specific reference to the Information
            Technology Act, 2000, without regard to its conflict of law
            provisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
