import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("product-design");

export const metadata: Metadata = {
  title: "Product design",
  description: service?.short,
  openGraph: { title: "Product design | Tora", description: service?.short }
};

export default function ProductDesignPage() {
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
