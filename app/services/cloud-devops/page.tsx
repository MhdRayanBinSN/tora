import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("cloud-devops");

export const metadata: Metadata = {
  title: "Cloud and DevOps",
  description: service?.short,
  openGraph: { title: "Cloud and DevOps | Tora", description: service?.short }
};

export default function CloudDevopsPage() {
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
