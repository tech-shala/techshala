import { Resend } from "resend";
import { NextResponse } from "next/server";
import { UserEnquiry } from "@/app/ui/email/UserEnquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, mobile, enquiryType, message } = await request.json();
  try {
    const { error } = await resend.emails.send({
      from: "TechShala <contact@aryanshinde.in>", // Changed from array to string
      to: ["yashnimse92@gmail.com", "shindearyan179@gmail.com", "prasad.koyande@vpt.edu.in", "kirti.gupta@vpt.edu.in", "gauri.bobade@vpt.edu.in"],
      subject: "Techshala - New Enquiry on Website",
      react: UserEnquiry({
        name,
        email,
        mobile,
        enquiryType,
        message,
      }),
    });

    if (error) {
      console.error("Email sending error:", error);
      return NextResponse.json({
        error: "Failed to send email",
        details: error,
        status: 500,
      });
    }

    console.log("Email sent successfully to:", email);
    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({
      error: "Unexpected error occurred",
      details: error.message,
      status: 500,
    });
  }
}
