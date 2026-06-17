import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("ai-integration");

export const metadata: Metadata = {
  title: "AI development and integration",
  description: service?.short,
  openGraph: { title: "AI development and integration | Tora", description: service?.short }
};

export default function AiIntegrationPage() {
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
