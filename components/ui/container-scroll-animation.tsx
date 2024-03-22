"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { AnimatedPinDemo } from "@/app/ui-components/3DPinDemo";
import { PinContainer } from "./3d-pin";

export const ContainerScroll = ({
  // users,
  titleComponent,
}: {
  // users: {
  //   name: string;
  //   designation: string;
  //   image: string;
  //   badge?: string;
  // }[];
  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="bg-slate-800 text-white flex items-center justify-center relative p-2 "
      ref={containerRef}
    >
      <div
        className="py-4 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
        // users={users}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  // users,
}: {
  rotate: any;
  scale: any;
  translate: any;
  // users: {
  //   name: string;
  //   designation: string;
  //   image: string;
  //   badge?: string;
  // }[];
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto  w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4">

        <PinContainer
          title="afyamed.global"
          href="https://afyamed.global">
          <div className=" rounded-lg shadow-md p-3">
            <p className="text-lg text-center">
              24/7 Virtual Consultations: Instant access to healthcare professionals anytime, anywhere.
            </p>
          </div>

        </PinContainer>
        <PinContainer
          title="afyamed.global"
          href="https://afyamed.global">
          <div className=" rounded-lg shadow-md p-3">
            <p className="text-lg text-center">
              Prescription Refills: Convenient medication management and prescription renewals.
            </p>
          </div>
        </PinContainer>
        <PinContainer
          title="afyamed.global"
          href="https://afyamed.global">
          <div className=" rounded-lg shadow-md p-3">
            <p className="text-lg text-center">Remote Monitoring: Continuous health tracking and personalized insights.</p>
          </div>
        </PinContainer>
        <PinContainer
          title="afyamed.global"
          href="https://afyamed.global">
          <div className=" rounded-lg shadow-md p-3">
            <p className="text-lg text-center">Specialist Referrals: Seamless connections to specialists for comprehensive care.</p>
          </div>
        </PinContainer>
        <PinContainer
          title="afyamed.global"
          href="https://afyamed.global">
          <div className=" rounded-lg shadow-md p-3">
            <p className="text-lg text-center">Secure Messaging: Private and secure communication with healthcare providers.</p>
          </div>
        </PinContainer>
        <PinContainer
          title="afyamed.global"
          href="https://afyamed.global">
          <div className=" rounded-lg shadow-md p-3">
            <p className="text-lg text-center">Chronic Disease Management: Tailored plans and support for managing chronic conditions.</p>
          </div>
        </PinContainer>
        <PinContainer
          title="afyamed.global"
          href="https://afyamed.global">
          <div className=" rounded-lg shadow-md p-3">
            <p className="text-lg text-center">Teletherapy Services: 
            Empowering Minds: Elevating Mental Well-being for All
            </p>
          </div>
        </PinContainer>
      </div>
    </motion.div>
  );
};
