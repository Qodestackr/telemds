import React from "react";
import Link from "next/link";
import { AfyaMedMacShowcaseScroll } from "@/components/ui/afyamed-mac-showcase";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <AfyaMedMacShowcaseScroll
        title={
          <span>
            Access premium healthcare from your palm.
            <br />Join us in shaping healthcare&apos;s future.
          </span>
        }
        badge={
          <Link href="/afyamed-shif-compliant">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/hospital/mac-scroll-platform.png`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <>
      <div className="sticker">
        <div className="sticker-content">
          <span>SHIF</span>
          <span>Compliant</span>
        </div>
      </div>

    </>
  );
};
