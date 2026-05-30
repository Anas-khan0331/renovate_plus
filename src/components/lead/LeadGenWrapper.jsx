"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });
const ScrollBanner = dynamic(() => import("./ScrollBanner"), { ssr: false });
const SocialProof = dynamic(() => import("./SocialProof"), { ssr: false });

export default function LeadGenWrapper() {
  return (
    <>
      <ChatWidget />
      <ScrollBanner />
      <SocialProof />
    </>
  );
}
