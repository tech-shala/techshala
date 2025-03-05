"use client";

import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import Hero from "@/app/ui/Hero";
import MovingText from "@/app/ui/MovingText";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import Card from "./ui/Card";
import { funfaceData } from "@/constants";
import EventSlider from "./ui/Slider/EventSlider";
import { events } from "@/constants";
import SponsorsSection from "@/app/ui/Sponsors";

// Hero Social Links
const heroSocialLinks = [
  {
    name: "Instagram",
    links: "https://www.instagram.com/vp_vidyalankar/",
  },
  {
    name: "Facebook",
    links: "https://www.facebook.com/Vidyalankar.VP/",
  },
];

export default function Home() {
  // Process events data
  const allEvents = Object.values(events).flatMap((domain) =>
    Object.values(domain)
  );

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Normalize to midnight for accurate comparison

  const filteredEvents = allEvents.filter((event) => {
    const [day, month, year] = event.date.split("-");
    const eventDate = new Date(`${year}-${month}-${day}`);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= currentDate;
  });

  filteredEvents.sort((a, b) => {
    const [aDay, aMonth, aYear] = a.date.split("-");
    const aDate = new Date(`${aYear}-${aMonth}-${aDay}`);
    const [bDay, bMonth, bYear] = b.date.split("-");
    const bDate = new Date(`${bYear}-${bMonth}-${bDay}`);
    return aDate - bDate;
  });

  const latestEvents = filteredEvents.slice(0, 10);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Techshala <br/>Tech Committee"
        subtitle="Techshala, where 'Tech' stands for Technology and 'Shala' means school, aims to make students technically sound through engaging events that make learning enjoyable."
        btnText="Want to Collaborate?"
        btnLink="/contact"
        scrollDownId="#domains"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact variant="cs-type1" />
      </div>
      {/* End FunFact Section */}

      {/* Start Domains Section */}
      <Spacing lg="150" md="80" />
      <div id="domains">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <SectionHeading
                title="What domains are we in?"
                subtitle="Our Domains"
                btnText="See All Events"
                btnLink="/events"
              />
              <Spacing lg="90" md="45" />
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6">
                  <Card
                    title="App Devlopment"
                    link="/events/app"
                    src="/images/domains/app.png"
                    alt="App Domain"
                  />
                  <Spacing lg="0" md="30" />
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6">
                  <Card
                    title="Web Development"
                    link="/events/web"
                    src="/images/domains/web.png"
                    alt="Web Domain"
                  />
                  <Spacing lg="0" md="30" />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <Card
                    title="Blockchain Development"
                    link="/events/blockchain"
                    src="/images/domains/blockchain.png"
                    alt="Blockchain Domain"
                  />
                  <Spacing lg="0" md="30" />
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6">
                  <Card
                    title="Cyber Security"
                    link="/events/cybersecurity"
                    src="/images/domains/cybersecurity.png"
                    alt="Cyber Security Domain"
                  />
                  <Spacing lg="0" md="30" />
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6">
                  <Card
                    title="AI / ML Development"
                    link="/events/aiml"
                    src="/images/domains/aiml.png"
                    alt="AI / ML Domain"
                  />
                  <Spacing lg="0" md="30" />
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6">
                  <Card
                    title="IoT Development"
                    link="/events/iot"
                    src="/images/domains/iot.png"
                    alt="IoT Domain"
                  />
                  <Spacing lg="0" md="30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Domains Section */}

      <SponsorsSection />

      {/* Start Events Section */}
      <Spacing lg="150" md="50" />
      <div>
        <div className="container">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Our Events"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </div>
        <EventSlider data={latestEvents} />
      </div>
      {/* End Events Section */}

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

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="| A Technical Committee from VP |" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}
    </>
  );
}
