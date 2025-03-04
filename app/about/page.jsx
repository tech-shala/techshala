"use client";
import Image from "next/image";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import { funfaceData } from "@/constants";

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="TechShala - Learn Beyond Classroom!"
              subtitle="Who We Are?"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                TechShala, derived from 'Technology' and 'Shala' (meaning
                school), is a student-led technical committee at Vidyalankar
                Polytechnic. Our mission is to enhance students' technical
                proficiency through engaging and enjoyable events. We organize a
                variety of activities, including workshops, expert lectures, and
                technical competitions, designed to make the learning process
                both effective and enjoyable. Our goal is to empower students
                with practical skills and knowledge, preparing them for
                successful careers in the ever-evolving technological landscape.
              </p>
              <Spacing lg="30" md="30" />
              <div className="cs-separator cs-accent_bg"></div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </div>
          <div className="col-lg-5 offset-xl-2">
            <Image
              src="/images/about_image.png"
              alt="About"
              className="w-100 cs-radius_15"
              width={600}
              height={600}
            />
            <Spacing lg="25" md="25" />
          </div>
        </div>
      </div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <div className="container">
        <FunFact
          title="Some Stats."
          subtitle="It's been 5+ years since Techshala is been established, and we have successfully organized 500+ workshops, with over more than 150k+ participation of students in whole."
          data={funfaceData}
        />
      </div>
      {/* End Fun Fact Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </div>
      {/* End Team Section */}

      <Spacing lg="150" md="80" />
    </>
  );
}
