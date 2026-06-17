import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("mvp-development");

export const metadata: Metadata = {
  title: "MVP development",
  description: service?.short,
  openGraph: { title: "MVP development | Tora", description: service?.short }
};

export default function MvpDevelopmentPage() {
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
