import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("custom-software");

export const metadata: Metadata = {
  title: "Custom software development",
  description: service?.short,
  openGraph: { title: "Custom software development | Tora", description: service?.short }
};

export default function CustomSoftwarePage() {
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
