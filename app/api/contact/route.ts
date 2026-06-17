import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json(
      { message: "Message was not sent. Send the form as valid JSON." },
      { status: 400 }
    );
  }

  const requiredFields: Array<keyof ContactPayload> = ["name", "email", "projectType", "budget", "message"];
  const missing = requiredFields.filter((field) => !String(payload[field] ?? "").trim());

  if (missing.length > 0) {
    return NextResponse.json(
      { message: `Message was not sent. Add ${missing.join(", ")} and send again.` },
      { status: 400 }
    );
  }

  console.info("Tora contact submission", {
    name: payload.name,
    email: payload.email,
    projectType: payload.projectType,
    budget: payload.budget,
    message: payload.message
  });

  return NextResponse.json({ message: "Message sent. Tora will reply with next steps." });
}
