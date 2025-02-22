"use client";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import ContactInfoWidget from "@/app/ui/Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    const id = toast.loading("Sending message...");
    setIsSubmitting(true);
    console.log("Sending message");
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Mobile: ", mobile);
    console.log("Enquiry Type: ", enquiryType);
    console.log("Message: ", message);
    if (email == "" || name == "" || mobile == "" || message == "") {
      toast.error("Please fill all the fields.", { id });
      setIsSubmitting(false);
      return;
    }
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        enquiryType,
        message,
      }),
    }).then(() => {
      toast.success("Enquiry Sent Successfully", { id });
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMobile("");
      setEnquiryType("");
      setMessage("");
    });
  };
  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Have a Tech Idea?<br/>We're Here to Help!"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={sendMessage} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="email"
                  className="cs-form_field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Enquiry Type</label>
                {/* write dropdown with 2 options */}
                <select
                  className="cs-form_field"
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  required
                >
                  <option>Select</option>
                  <option value="general-enquiry">General Enquiry</option>
                  <option value="Event-collaboration">
                    Event Collaboration
                  </option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button
                  className="cs-btn cs-style1"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && <Icon icon="bi:arrow-right" />}
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.95556040178!2d72.8699477!3d19.021679799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf48beff6adb%3A0x8b57459cf41f7a2c!2sVidyalankar%20Polytechnic!5e0!3m2!1sen!2sin!4v1739868578983!5m2!1sen!2sin"
          allowFullScreen
          title="Google Map"
          loading="lazy"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
