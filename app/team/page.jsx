"use client";

import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Team from "@/app/ui/Team";
import FlowingMenu from "../ui/FlowingMenu";
import {
  cto,
  COCoreTeam,
  IFCoreTeam,
  EJCoreTeam,
  domainHeads,
  facultyTeam,
} from "@/constants";

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
          title="Meet our awesome <br/>Faculty Heads"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {cto.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6 mx-auto">
              <Team
                // memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {facultyTeam.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6 mx-auto">
              <Team
                // memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <SectionHeading
          title="Amazing Core Team"
          subtitle=" Our Core Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="50" />
        <Div className="row">
          {COCoreTeam.map((item, index) => (
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
        <Div className="row">
          {EJCoreTeam.map((item, index) => (
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
        <Div className="row">
          {IFCoreTeam.map((item, index) => (
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
      </Div>
      <SectionHeading
        title="Brilliant Domain Heads"
        subtitle=" Our Domain Heads"
        variant="cs-style1 text-center"
      />
      <Spacing lg="70" md="50" />
      <Div>
        <FlowingMenu items={domainHeads} />
      </Div>
      <Spacing lg="70" md="50" />
    </>
  );
}
