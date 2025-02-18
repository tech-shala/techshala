"use client";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import Hero from "@/app/ui/Hero";
import LogoList from "@/app/ui/LogoList";
import MovingText from "@/app/ui/MovingText";
import SectionHeading from "@/app/ui/SectionHeading";
import PortfolioSlider from "@/app/ui/Slider/PortfolioSlider";
import PostSlider from "@/app/ui/Slider/PostSlider";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import TimelineSlider from "@/app/ui/Slider/TimelineSlider";
import Spacing from "@/app/ui/Spacing";
// import VideoModal from "@/app/ui/VideoModal";
import Card from "./ui/Card";
import { funfaceData } from "@/constants";
import EventSlider from "./ui/Slider/EventSlider";
import { events } from "@/constants";

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

// Portfolio Data
// const eventData = [
//   {
//     title: "Colorful Art Work",
//     subtitle: "See Details",
//     href: "/portfolio/portfolio-details",
//     src: "/images/portfolio_1.jpeg",
//   },
//   {
//     title: "Colorful Art Work",
//     subtitle: "See Details",
//     href: "/portfolio/portfolio-details",
//     src: "/images/portfolio_2.jpeg",
//   },
//   {
//     title: "Colorful Art Work",
//     subtitle: "See Details",
//     href: "/portfolio/portfolio-details",
//     src: "/images/portfolio_0.jpg",
//   },
//   {
//     title: "Colorful Art Work",
//     subtitle: "See Details",
//     href: "/portfolio/portfolio-details",
//     src: "/images/portfolio_3.jpeg",
//   },
// ];

export default function Home() {
  // Process events data
  const allEvents = Object.values(events).flatMap(domain => Object.values(domain));

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Normalize to midnight for accurate comparison

  const filteredEvents = allEvents.filter(event => {
    const [day, month, year] = event.date.split('-');
    const eventDate = new Date(`${year}-${month}-${day}`);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= currentDate;
  });

  filteredEvents.sort((a, b) => {
    const [aDay, aMonth, aYear] = a.date.split('-');
    const aDate = new Date(`${aYear}-${aMonth}-${aDay}`);
    const [bDay, bMonth, bYear] = b.date.split('-');
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
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="It's been 5+ years since Techshala is been established, and we have successfully organized 500+ workshops, with over more than 150k+ participation of students in whole."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="What domains are we in?"
                subtitle="Our Domains"
                btnText="See All Events"
                btnLink="/events"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="App Devlopment"
                    link="/events?domain=app"
                    src="/images/service_1.jpeg"
                    alt="App Domain"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Web Development"
                    link="/events?domain=web"
                    src="/images/service_2.jpeg"
                    alt="Web Domain"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Blockchain Development"
                    link="/events?domain=blockchain"
                    src="/images/service_3.jpeg"
                    alt="Blockchain Domain"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Cyber Security"
                    link="/events?domain=cybersecurity"
                    src="/images/service_4.jpeg"
                    alt="Cyber Security Domain"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="AI / ML Development"
                    link="/events?domain=aiml"
                    src="/images/service_1.jpeg"
                    alt="AI / ML Domain"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="IoT Development"
                    link="/events?domain=iot"
                    src="/images/service_2.jpeg"
                    alt="IoT Domain"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <EventSlider data={latestEvents} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      {/* <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div> */}
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* <Spacing lg="150" md="80" /> */}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let's disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
