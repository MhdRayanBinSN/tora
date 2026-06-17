import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("saas-development");

export const metadata: Metadata = {
  title: "SaaS development",
  description: service?.short,
  openGraph: { title: "SaaS development | Tora", description: service?.short }
};

export default function SaasDevelopmentPage() {
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
