"use client";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Team from "@/app/ui/Team";
import FlowingMenu from "../ui/FlowingMenu";

const facultyTeam = [
  {
    memberImage: "/images/member_1.jpeg",
    memberName: "Melon Bulgery",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_2.jpeg",
    memberName: "Olinaz Fushi",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_3.jpeg",
    memberName: "David Elone",
    memberDesignation: "React Developer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },

  {
    memberImage: "/images/member_2.jpeg",
    memberName: "Olinaz Fushi",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
];
const CoreTeam = [
  {
    memberImage: "/images/member_1.jpeg",
    memberName: "Melon Bulgery",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_2.jpeg",
    memberName: "Olinaz Fushi",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_3.jpeg",
    memberName: "David Elone",
    memberDesignation: "React Developer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },

  {
    memberImage: "/images/member_2.jpeg",
    memberName: "Olinaz Fushi",
    memberDesignation: "Product Designer",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
];
const demoItems = [
  {
    link: "#",
    text: "Mojave",
    domain: "App Domain Head",
    image: "/images/coding-person.png",
  },

  {
    link: "#",
    text: "Sonoma",
    domain: "App Domain Head",

    image: "/images/coding-person.png",
  },

  {
    link: "#",
    text: "Monterey",
    domain: "Web Domain Head",

    image: "https://picsum.photos/600/400?random=3",
  },

  {
    link: "#",
    text: "Sequoia",
    domain: "Web Domain Head",

    image: "https://picsum.photos/600/400?random=4",
  },
];
export default function TeamPage() {
  return (
    <>
      <PageHeading
        title="Our Team"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Meet our awesome <br/>tech team members"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-3 col-sm-6 mx-auto">
            <Team
              memberImage={facultyTeam[2].memberImage}
              memberName="Anjum Munjawar"
              memberDesignation="CTO"
              memberSocial="/"
            />
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {facultyTeam.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        {/* <Spacing lg="70" md="50" /> */}
        <SectionHeading
          title="Amazing Core Team"
          subtitle=" Our Core Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="50" />
        <Div className="row">
          {CoreTeam.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>

        {/* <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div> */}
      </Div>
      <SectionHeading
        title="Brilliant Domain Heads"
        subtitle=" Our Domain Heads"
        variant="cs-style1 text-center"
      />
      <Spacing lg="70" md="50" />
      <Div>
        <FlowingMenu items={demoItems} />
      </Div>
    </>
  );
}
